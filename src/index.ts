import {
  deleteRequest,
  getRequest,
  getItemAndMetaVariablesRequest,
  setRequest
} from "./api/item/requests";
import { dumps, loads } from "./api/serializer";
import * as errors from "./api/item/errors";
import * as utils from "./api/utils";


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

    errors,
    utils,
};
