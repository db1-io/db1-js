import * as apiRestPb from "../../proto_stubs/api/item_cr_0v1_pb";
import {
    DB1_API_ITEM_SET_URL,
    DB1_API_ITEM_GET_URL,
} from "./environmentVars";
import { makeHttpRequest } from "../httpUtils";
import { checkComonStatus } from "./utils";
import {
    NotFoundError,
    BadRequestError,
} from "./errors";


export async function deleteRequest(key: string) {
    let commonRequest = new apiRestPb.item_cr_0v1.CommonRequest();

    const request = apiRestPb.item_cr_0v1.DeleteRequest.create({
        common: commonRequest,
        resourceId: key,
    });

    const encoded_request = apiRestPb.item_cr_0v1.DeleteRequest.encode(request).finish();
    const http_response = await makeHttpRequest(
        DB1_API_ITEM_SET_URL,
        encoded_request
    );

    const arrayBuffer = await http_response.arrayBuffer();
    const response = apiRestPb.item_cr_0v1.DeleteResponse.decode(
        new Uint8Array(arrayBuffer)
    );

    checkComonStatus(response.common);

    if (response.status == apiRestPb.item_cr_0v1.DeleteResponse.Status.NOT_FOUND) {
        throw new NotFoundError("Not found");
    }
    if (response.status == apiRestPb.item_cr_0v1.DeleteResponse.Status.INVALID_RESOURCE_ID) {
        throw new BadRequestError("Invalid key");
    }
    if (response.status == apiRestPb.item_cr_0v1.DeleteResponse.Status.DELETED) {}
}


interface getRequestReturnType {
    value: Uint8Array,
    sizeBytes: number,
    createdMs: number,
    updatedMs: number
}

export async function getRequest(key: string, maxSizeBytes?: number): Promise<getRequestReturnType> {
    let commonRequest = new apiRestPb.item_cr_0v1.CommonRequest();

    const request = apiRestPb.item_cr_0v1.GetRequest.create({
        common: commonRequest,
        resourceId: key,
        withoutMetavaribles: true,
        withoutItemValue: false,
        maxSizeBytes: maxSizeBytes,
    });

    const encoded_request = apiRestPb.item_cr_0v1.GetRequest.encode(request).finish();
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
        throw new NotFoundError("Not found");
    }

    if (response.sizeBytesBiggerThanMax) {
        throw new BadRequestError(`Item value is bigger than the max size of ${maxSizeBytes} bytes.`);
    }
    if (response.status == apiRestPb.item_cr_0v1.GetResponse.Status.FOUND) {}

    return {
        value: response.itemValue,
        sizeBytes: Number(response.sizeBytes),
        createdMs: Number(response.createdMs),
        updatedMs: Number(response.updatedMs),
    }
}


export async function getItemAndMetaVariablesRequest(
    key: string,
    maxSizeBytes?: number
) {
    let commonRequest = new apiRestPb.item_cr_0v1.CommonRequest();

    const request = apiRestPb.item_cr_0v1.GetRequest.create({
        common: commonRequest,
        resourceId: key,
        withoutMetavaribles: false,
        withoutItemValue: false,
        maxSizeBytes: maxSizeBytes,
    });

    const encoded_request = apiRestPb.item_cr_0v1.GetRequest.encode(request).finish();
    const http_response = await makeHttpRequest(
        DB1_API_ITEM_GET_URL,
        encoded_request
    );

    const arrayBuffer = await http_response.arrayBuffer();
    const response = apiRestPb.item_cr_0v1.GetResponse.decode(
        new Uint8Array(arrayBuffer)
    );

    if (response.status == apiRestPb.item_cr_0v1.GetResponse.Status.NOT_FOUND) {
        throw new NotFoundError("Not found");
    }
    if (response.status == apiRestPb.item_cr_0v1.GetResponse.Status.FOUND) {}

    if (response.sizeBytesBiggerThanMax) {
        throw new BadRequestError(`Item value is bigger than the max size of ${maxSizeBytes} bytes.`);
    }

    return {
        value: response.itemValue,
        sizeBytes: response.sizeBytes,
        createdMs: response.createdMs,
        updatedMs: response.updatedMs,
        metaVariables: response.metavaribles
    }
}


export async function setRequest(key: string, value: Uint8Array) {
    let commonRequest = new apiRestPb.item_cr_0v1.CommonRequest();

    const request = apiRestPb.item_cr_0v1.SetRequest.create({
        common: commonRequest,
        resourceId: key,
        itemValue: value,
    });

    const encoded_request = apiRestPb.item_cr_0v1.SetRequest.encode(request).finish();
    const http_response = await makeHttpRequest(
        DB1_API_ITEM_SET_URL,
        encoded_request
    );

    const arrayBuffer = await http_response.arrayBuffer();
    const response = apiRestPb.item_cr_0v1.SetResponse.decode(
        new Uint8Array(arrayBuffer)
    );

    checkComonStatus(response.common);
    if (response.status == apiRestPb.item_cr_0v1.SetResponse.Status.NOT_FOUND) {
        throw new NotFoundError(`An item with resource id "${key}" does not exist.`);
    }
    if (response.status == apiRestPb.item_cr_0v1.SetResponse.Status.INVALID_RESOURCE_ID) {
        throw new BadRequestError("Invalid key");
    }
    if (response.status == apiRestPb.item_cr_0v1.SetResponse.Status.UPDATED) {}
}




