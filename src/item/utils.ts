import * as apiRestPb from "../proto_stubs/api/item_cr_0v1_pb";
import {
    InternalError,
    BadRequestError,
} from "./errors";

export function checkComonStatus(common: any) {
    if (common == undefined || common == null) {
        throw new InternalError("No common response");
    }
    if (common.status == undefined || common.status == null) {
        throw new InternalError("No common response status");
    }
    if (common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.INTERNAL_ERROR) {
        throw new InternalError("Internal error");
    }
    if (common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.BAD_REQUEST) {
        throw new BadRequestError("Bad request");
    }
    if (common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.OK_REQUEST) {
        return;
    }
}
