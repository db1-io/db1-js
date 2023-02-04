import { Table } from 'apache-arrow';

import * as serializerPb from "./proto_stubs/serializer/serializer_pb";

export const PROTO_VALUE = serializerPb.Value
export const PROTO_TYPE = serializerPb.Value.Type

export const PRETTY_TYPE: {[protoType: number]: string} = {
    [PROTO_TYPE.INT64_]: "int",
    [PROTO_TYPE.FLOAT_]: "float",
    [PROTO_TYPE.STRING_]: "string",
    [PROTO_TYPE.BOOL_]: "bool",
    [PROTO_TYPE.BYTES_]: "bytes",
    [PROTO_TYPE.LIST]: "list",
    [PROTO_TYPE.DICT]: "dict",
    [PROTO_TYPE.NDARRAY]: "ndarray",
    [PROTO_TYPE.DATAFRAME]: "data_frame",
}


export function getValueType(jsValue: any): number {
    if (typeof jsValue == "number" && Number.isInteger(jsValue)) { return PROTO_TYPE.INT64_; }
    if (typeof jsValue == "number") { return PROTO_TYPE.FLOAT_; }
    if (typeof jsValue == "string") { return PROTO_TYPE.STRING_; }
    if (typeof jsValue == "boolean") { return PROTO_TYPE.BOOL_; }
    if (typeof jsValue == "object" && jsValue instanceof Table) { return PROTO_TYPE.DATAFRAME; }
    if (typeof jsValue == "object" && jsValue.constructor == Uint8Array) { return PROTO_TYPE.BYTES_; }
    if (typeof jsValue == "object" && jsValue instanceof Array) { return PROTO_TYPE.LIST; }
    if (typeof jsValue == "object" && jsValue instanceof Object) { return PROTO_TYPE.DICT; }
    throw new Error(`Cannot encode value of type ${typeof jsValue}`);
}


export function getValueDescription(value: any, max_length?: number): string {
    if (max_length == undefined) { max_length = 80; }
    const type = getValueType(value);

    if (type == PROTO_TYPE.INT64_) { return String(value); }
    else if (type == PROTO_TYPE.FLOAT_) { return String(value); }
    else if (type == PROTO_TYPE.STRING_) {
        if (value.length > max_length) { return value.substr(0, max_length) + " ..."; }
        else { return value; }
    }
    else if (type == PROTO_TYPE.BOOL_) { return String(value); }
    else if (type == PROTO_TYPE.BYTES_) {
        return "";
    }
    else if (type == PROTO_TYPE.LIST) {
        return "Length: " + value.length;
    }
    else if (type == PROTO_TYPE.DICT) {
        let desc = "Keys: [" + Object.keys(value).join(", ") + "]";
        if (desc.length > max_length) { return desc.substr(0, max_length) + " ..."; }
        else { return desc; }
    }
    else if (type == PROTO_TYPE.NDARRAY) {
        return "Shape: [" + value.shape.join(", ") + "]";
    }
    else if (type == PROTO_TYPE.DATAFRAME) {
        return "Shape: [" + value.shape.join(", ") + "]";
    }
    else {
        throw new Error(`Cannot describe value of type ${type}`);
    }
}


export function valueHasKeyPath(value: any, keys: string[]): boolean {
    if (keys.length == 0) { return true; }

    let subValue = value;
    for (let i=0; i<keys.length; i++) {
        const subValueType = getValueType(subValue);
        if (subValueType != PROTO_TYPE.DICT && subValueType != PROTO_TYPE.LIST) { return false; }
        if (!(keys[i]! in subValue)) { return false; }
        subValue = subValue[keys[i]!];
    }
    return true;
}


export function getSubValue(value: any, keys: string[]) {
    if (keys.length == 0) { return value; }
    let subValue = value;
    for (let i=0; i<keys.length; i++) {
        subValue = subValue[keys[i]!];
    }
    return subValue;
}


export function legalStringToInt(value: string): boolean {
    if (value === "") { return false; }
    const number = Number(value);
    return !isNaN(number) && Number.isInteger(number);
}


export function legalStringToFloat(value: string): boolean {
    if (value === "") { return false; }
    const number = Number(value);
    return !isNaN(number);
}


export function stringToInt(value: string): number {
    if (!legalStringToInt(value)) {
        throw new Error(`Value '${value}' is not a legal integer.`);
    }
    return Number(value);
}


export function stringToFloat(value: string): number {
    if (!legalStringToFloat(value)) {
        throw new Error(`Value '${value}' is not a legal float.`);
    }
    return Number(value);
}
