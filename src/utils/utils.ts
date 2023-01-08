import * as serializerPb from "./proto_stubs/serializer/serializer_pb";
import * as apiRestPb from "./proto_stubs/api/item_cr_0v1_pb";
import fetch from "cross-fetch";

const DB1_API_ITEM_GET_URL = "https://item.db1.io/get";
// const DB1_API_ITEM_CREATE_URL = "https://item.db1.io/create";
const DB1_API_ITEM_SET_URL = "https://item.db1.io/set";

async function makeHttpRequest(url: string, body: any): Promise<Response> {
  const httpResponse = await fetch(url, {
    method: "POST",
    body,
    headers: { "content-type": "application/octet-stream" },
  });
  return httpResponse;
}

function checkComonStatus(common: any) {
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

export async function getValueAndMetadata(resouceId: string) {
  let commonRequest = new apiRestPb.item_cr_0v1.CommonRequest();

  const request = apiRestPb.item_cr_0v1.GetRequest.create({
    common: commonRequest,
    resourceId: resouceId,
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

  const arrayBuffer = await http_response.arrayBuffer();
  const response = apiRestPb.item_cr_0v1.GetResponse.decode(
    new Uint8Array(arrayBuffer)
  );

  checkComonStatus(response.common);
  if (response.status == apiRestPb.item_cr_0v1.GetResponse.Status.NOT_FOUND) {
    throw new Error("Not found");
  }
  if (response.status == apiRestPb.item_cr_0v1.GetResponse.Status.FOUND) {
  }

  let metaVariables: any = {};
  for (const i in response.metavaribles) {
    const metaVariable = response.metavaribles[i];
    if (
      metaVariable.key == undefined ||
      metaVariable.key == null ||
      metaVariable.value == undefined ||
      metaVariable.value == null
    ) {
      throw new Error("Bad meta variable");
    }
    metaVariables[metaVariable.key] = metaVariable.value;
  }
  metaVariables["size_bytes"] = response.sizeBytes;
  metaVariables["created_ms"] = response.createdMs;
  metaVariables["updated_ms"] = response.updatedMs;

  return {
    value: serializerPb.Value.decode(response.itemValue),
    meta_variables: metaVariables,
  };
}

function getTypeFromProto(protoValue: any): string {
  return serializerPb.Value.Type[protoValue.type];
}

export function getValueDescriptionFromProto(
  protoValue: any,
  maxLength?: number
): string {
  if (maxLength == undefined) {
    maxLength = 80;
  }
  const type = getTypeFromProto(protoValue);

  if (type == "INT64_") {
    return String(protoValue.int64_);
  } else if (type == "FLOAT_") {
    return String(protoValue.float_);
  } else if (type == "STRING_") {
    if (protoValue.string_.length > maxLength) {
      return protoValue.string_.substr(0, maxLength) + " ...";
    } else {
      return protoValue.string_;
    }
  } else if (type == "BOOL_") {
    return String(protoValue.bool_);
  } else if (type == "BYTES_") {
    return "";
  } else if (type == "LIST") {
    return "Length: " + Object.keys(protoValue.list).length;
  } else if (type == "DICT") {
    // let desc = "Keys: " + JSON.stringify(proto_value.dict.keys);
    let desc = "Keys: [" + protoValue.dict.keys.join(", ") + "]";
    if (desc.length > maxLength) {
      desc = "Length: " + protoValue.dict.keys.length;
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

export async function setValue(resource_id: string, value: any) {
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

  checkComonStatus(response.common);
  if (response.status == apiRestPb.item_cr_0v1.SetResponse.Status.NOT_FOUND) {
    throw new Error("Not found");
  }
  if (response.status == apiRestPb.item_cr_0v1.SetResponse.Status.UPDATED) {
    return;
  }
}

function getElementType(element: any): string {
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
  const pb_element = jsToPbElement(js_element);
  const ser_element = serializerPb.Value.encode(pb_element).finish();
  return ser_element;
}

function jsToPbElement(jsElement: any): serializerPb.Value {
  let pbElement = serializerPb.Value.create();
  const element_type = getElementType(jsElement);

  if (element_type == "int") {
    pbElement.type = serializerPb.Value.Type.INT64_;
    pbElement.int64_ = jsElement;
  } else if (element_type == "float") {
    pbElement.type = serializerPb.Value.Type.FLOAT_;
    pbElement.float_ = jsElement;
  } else if (element_type == "string") {
    pbElement.type = serializerPb.Value.Type.STRING_;
    pbElement.string_ = jsElement;
  } else if (element_type == "bool") {
    pbElement.type = serializerPb.Value.Type.BOOL_;
    pbElement.bool_ = jsElement;
  } else if (element_type == "bytes") {
    pbElement.type = serializerPb.Value.Type.BYTES_;
    pbElement.bytes_ = jsElement;
  } else if (element_type == "list") {
    pbElement.type = serializerPb.Value.Type.LIST;
    for (const i in jsElement) {
      pbElement.list.push(jsToPbElement(jsElement[i]));
    }
  } else if (element_type == "ndarray") {
    pbElement.type = serializerPb.Value.Type.NDARRAY;
    const param: any = {
      bytes: jsElement.bytes,
      shape: jsElement.shape,
      type: jsElement.type,
    };
    let ndarray = serializerPb.NDArray.create(param);
    pbElement.ndarray = ndarray;
  } else if (element_type == "dict") {
    pbElement.type = serializerPb.Value.Type.DICT;
    let keys = [];
    let values = [];
    for (const key in jsElement) {
      keys.push(key);
      values.push(jsToPbElement(jsElement[key]));
    }
    let dict_ = serializerPb.Dict.create({ keys: keys, values: values });
    pbElement.dict = dict_;
  } else {
    throw new Error(
      `Element of type '${typeof jsElement}' could not be serialized.`
    );
  }

  return pbElement;
}
