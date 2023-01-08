import * as serializerPb from "./proto_stubs/serializer/serializer_pb";
import * as apiRestPb from "./proto_stubs/api/item_cr_0v1_pb";
import fetch from "cross-fetch";

const DB1_API_ITEM_GET_URL = "https://item.db1.io/get";
// const DB1_API_ITEM_CREATE_URL = "https://item.db1.io/create";
const DB1_API_ITEM_SET_URL = "https://item.db1.io/set";

async function makeHttpRequest(url: string, data: any): Promise<any> {
  const httpResponse = await fetch(url, {
    method: "POST",
    body: data,
    headers: { "content-type": "application/octet-stream" },
  });
  return httpResponse;
}

function check_common_status(common: any) {
  if (common == undefined || common == null) {
    throw new Error("No common response");
  }
  if (common.status == undefined || common.status == null) {
    throw new Error("No common response status");
  }
  if (
    common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.INTERNAL_ERROR
  ) {
    throw new Error("Internal error");
  }
  if (
    common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.BAD_REQUEST
  ) {
    throw new Error("Bad request");
  }
  if (common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.OK_REQUEST) {
    return;
  }
}

async function get_value_and_metadata(resource_id: string) {
  let common_request = new apiRestPb.item_cr_0v1.CommonRequest();

  const request = apiRestPb.item_cr_0v1.GetRequest.create({
    common: common_request,
    resourceId: resource_id,
    withoutMetavaribles: false,
    withoutItemValue: false,
    maxSizeBytes: null,
  });

  const encoded_request =
    apiRestPb.item_cr_0v1.GetRequest.encode(request).finish();
  const http_response = await makeHttpRequest(
    DB1_API_ITEM_GET_URL,
    encoded_request
  );

  const array_buffer = await http_response.arrayBuffer();
  const response = apiRestPb.item_cr_0v1.GetResponse.decode(
    new Uint8Array(array_buffer)
  );

  check_common_status(response.common);
  if (response.status == apiRestPb.item_cr_0v1.GetResponse.Status.NOT_FOUND) {
    throw new Error("Not found");
  }
  if (response.status == apiRestPb.item_cr_0v1.GetResponse.Status.FOUND) {
  }

  let meta_variables: any = {};
  for (const i in response.metavaribles) {
    const meta_variable = response.metavaribles[i];
    if (
      meta_variable.key == undefined ||
      meta_variable.key == null ||
      meta_variable.value == undefined ||
      meta_variable.value == null
    ) {
      throw new Error("Bad meta variable");
    }
    meta_variables[meta_variable.key] = meta_variable.value;
  }
  meta_variables["size_bytes"] = response.sizeBytes;
  meta_variables["created_ms"] = response.createdMs;
  meta_variables["updated_ms"] = response.updatedMs;

  return {
    value: serializerPb.Value.decode(response.itemValue),
    meta_variables: meta_variables,
  };
}

function get_type_from_proto(proto_value: any): string {
  return serializerPb.Value.Type[proto_value.type];
}

function get_value_description_from_proto(
  proto_value: any,
  max_length?: number
): string {
  if (max_length == undefined) {
    max_length = 80;
  }
  const type = get_type_from_proto(proto_value);

  if (type == "INT64_") {
    return String(proto_value.int64_);
  } else if (type == "FLOAT_") {
    return String(proto_value.float_);
  } else if (type == "STRING_") {
    if (proto_value.string_.length > max_length) {
      return proto_value.string_.substr(0, max_length) + " ...";
    } else {
      return proto_value.string_;
    }
  } else if (type == "BOOL_") {
    return String(proto_value.bool_);
  } else if (type == "BYTES_") {
    return "";
  } else if (type == "LIST") {
    return "Length: " + Object.keys(proto_value.list).length;
  } else if (type == "DICT") {
    // let desc = "Keys: " + JSON.stringify(proto_value.dict.keys);
    let desc = "Keys: [" + proto_value.dict.keys.join(", ") + "]";
    if (desc.length > max_length) {
      desc = "Length: " + proto_value.dict.keys.length;
    }
    return desc;
    // } else if (type == "NDARRAY") {
    //   return (
    //     "Shape: [" +
    //     proto_value.ndarray.shape.join(", ") +
    //     "] | Type: " +
    //     proto_value.ndarray.type
    //   );
    // } else if (type == "DATAFRAME") {
    //   const table = tableFromIPC(proto_value.bytes_);
    //   let desc =
    //     "Columns: [" +
    //     table.schema.fields.map((field) => field.name).join(", ") +
    //     "]";
    //   if (desc.length > max_length) {
    //     desc = "Columns num: " + table.schema.fields.length;
    //   }
    //   return desc;
  } else {
    throw new Error("Could not parse json value.");
  }
}

async function set_value(resource_id: string, value: any) {
  let common_request = new apiRestPb.item_cr_0v1.CommonRequest();
  // common_request.token = "";
  // common_request.usage_message = "";
  const ser_val = serialize_element(value);

  const request = apiRestPb.item_cr_0v1.SetRequest.create({
    common: common_request,
    resourceId: resource_id,
    itemValue: ser_val,
  });

  const encoded_request =
    apiRestPb.item_cr_0v1.SetRequest.encode(request).finish();
  const http_response = await makeHttpRequest(
    DB1_API_ITEM_SET_URL,
    encoded_request
  );

  const array_buffer = await http_response.arrayBuffer();
  const response = apiRestPb.item_cr_0v1.SetResponse.decode(
    new Uint8Array(array_buffer)
  );

  check_common_status(response.common);
  if (response.status == apiRestPb.item_cr_0v1.SetResponse.Status.NOT_FOUND) {
    throw new Error("Not found");
  }
  if (response.status == apiRestPb.item_cr_0v1.SetResponse.Status.UPDATED) {
    return;
  }
}

function get_element_type(element: any): string {
  if (typeof element == "number" && Number.isInteger(element)) {
    return "int";
  }
  if (typeof element == "number") {
    return "float";
  }
  if (typeof element == "string") {
    return "string";
  }
  if (typeof element == "boolean") {
    return "bool";
  }
  // if (typeof element == "object" && element instanceof Table) { return "data_frame"; }
  // if (typeof element == "object" && element.constructor == Uint8Array) { return "bytes"; }
  // if (typeof element == "object" && element.constructor == Array) { return "list"; }
  // if (typeof element == "object" && "proto_type" in element && element["proto_type"] == "ndarray") { return "ndarray"; }
  // if (typeof element == "object") { return "dict"; }
  throw new Error(`Element of type '${typeof element}' could classified.`);
}

function serialize_element(js_element: any): Uint8Array {
  const pb_element = js_to_pb_element(js_element);
  const ser_element = serializerPb.Value.encode(pb_element).finish();
  return ser_element;
}

function js_to_pb_element(js_element: any): serializerPb.Value {
  let pb_element = serializerPb.Value.create();
  const element_type = get_element_type(js_element);

  if (element_type == "int") {
    pb_element.type = serializerPb.Value.Type.INT64_;
    pb_element.int64_ = js_element;
  } else if (element_type == "float") {
    pb_element.type = serializerPb.Value.Type.FLOAT_;
    pb_element.float_ = js_element;
  } else if (element_type == "string") {
    pb_element.type = serializerPb.Value.Type.STRING_;
    pb_element.string_ = js_element;
  } else if (element_type == "bool") {
    pb_element.type = serializerPb.Value.Type.BOOL_;
    pb_element.bool_ = js_element;
  } else if (element_type == "bytes") {
    pb_element.type = serializerPb.Value.Type.BYTES_;
    pb_element.bytes_ = js_element;
  } else if (element_type == "list") {
    pb_element.type = serializerPb.Value.Type.LIST;
    for (const i in js_element) {
      pb_element.list.push(js_to_pb_element(js_element[i]));
    }
  } else if (element_type == "ndarray") {
    pb_element.type = serializerPb.Value.Type.NDARRAY;
    const param: any = {
      bytes: js_element.bytes,
      shape: js_element.shape,
      type: js_element.type,
    };
    let ndarray = serializerPb.NDArray.create(param);
    pb_element.ndarray = ndarray;
  } else if (element_type == "dict") {
    pb_element.type = serializerPb.Value.Type.DICT;
    let keys = [];
    let values = [];
    for (const key in js_element) {
      keys.push(key);
      values.push(js_to_pb_element(js_element[key]));
    }
    let dict_ = serializerPb.Dict.create({ keys: keys, values: values });
    pb_element.dict = dict_;
  } else {
    throw new Error(
      `Element of type '${typeof js_element}' could not be serialized.`
    );
  }

  return pb_element;
}

export default {
  async getItem(key: string): Promise<any> {
    const result = await get_value_and_metadata(key);
    const value = get_value_description_from_proto(result.value);
    return value;
  },

  async setItem(key: string, value: any) {
    await set_value(key, value);
  },
};
