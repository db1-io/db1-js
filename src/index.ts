import {
  deleteRequest,
  getRequest,
  getItemAndMetaVariablesRequest,
  setRequest
} from "./item/requests";
import { dumps, loads } from "./serializer";
import * as errors from "./item/errors";
import * as utils from "./utils";
import * as serializerPb from "./proto_stubs/serializer/serializer_pb";
import * as itemApiPb from "./proto_stubs/api/item_cr_0v1_pb";
import * as serializer from "./serializer";

export const db1 = {

    async deleteItem(key: string) {
        await deleteRequest(key)
    },

    async getItem(key: string, maxSizeBytes?: number) {
        let res = await getRequest(key, maxSizeBytes)
        return loads(res.value)
    },

    async getItemAndMetaVariables(key: string, maxSizeBytes?: number) {
        let res = await getItemAndMetaVariablesRequest(key, maxSizeBytes)
        return {
            value: loads(res.value),
            sizeBytes: res.sizeBytes,
            createdMs: res.createdMs,
            updatedMs: res.updatedMs,
            metaVariables: res.metaVariables
        }
    },

    async setItem(key: string, value: any) {
        let valueBytes = dumps(value)
        await setRequest(key, valueBytes)
    },

    serializer,
    errors,
    utils,
    protos : {
        serializerPb,
        itemApiPb
    }
};
