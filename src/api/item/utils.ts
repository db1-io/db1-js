import * as apiRestPb from "../../proto_stubs/api/item_cr_0v1_pb";


export function checkComonStatus(common: any) {
    if (common == undefined || common == null) {
        throw new Error("No common response");
    }
    if (common.status == undefined || common.status == null) {
        throw new Error("No common response status");
    }
    if (common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.INTERNAL_ERROR) {
        throw new Error("Internal error");
    }
    if (common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.BAD_REQUEST) {
        throw new Error("Bad request");
    }
    if (common.status == apiRestPb.item_cr_0v1.CommonResponse.Status.OK_REQUEST) {
        return;
    }
}
