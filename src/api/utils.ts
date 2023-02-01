import { Table } from '@apache-arrow/es5-esm';

import * as serializerPb from "../proto_stubs/serializer/serializer_pb";



export enum ValueType {
    INT = "int",
    FLOAT = "float",
    STRING = "string",
    BOOL = "bool",
    BYTES = "bytes",
    LIST = "list",
    DICT = "dict",
    NDARRAY = "ndarray",
    DATA_FRAME = "data_frame",
}

export const PROTO_TO_VALUE_TYPE = {
    [serializerPb.Value.Type.INT64_]: ValueType.INT,
    [serializerPb.Value.Type.FLOAT_]: ValueType.FLOAT,
    [serializerPb.Value.Type.STRING_]: ValueType.STRING,
    [serializerPb.Value.Type.BOOL_]: ValueType.BOOL,
    [serializerPb.Value.Type.BYTES_]: ValueType.BYTES,
    [serializerPb.Value.Type.LIST]: ValueType.LIST,
    [serializerPb.Value.Type.DICT]: ValueType.DICT,
    [serializerPb.Value.Type.NDARRAY]: ValueType.NDARRAY,
    [serializerPb.Value.Type.DATAFRAME]: ValueType.DATA_FRAME,
}


export function getValueType(jsValue: any): string {
    if (typeof jsValue == "number" && Number.isInteger(jsValue)) { return ValueType.INT; }
    if (typeof jsValue == "number") { return ValueType.FLOAT; }
    if (typeof jsValue == "string") { return ValueType.STRING; }
    if (typeof jsValue == "boolean") { return ValueType.BOOL; }
    if (typeof jsValue == "object" && jsValue instanceof Table) { return ValueType.DATA_FRAME; }
    if (typeof jsValue == "object" && jsValue.constructor == Uint8Array) { return ValueType.BYTES; }
    if (typeof jsValue == "object" && jsValue.constructor == Array) { return ValueType.LIST; }
    if (typeof jsValue == "object" && "__value_type__" in jsValue && jsValue["__value_type__"] == "ndarray") { return ValueType.NDARRAY; }
    if (typeof jsValue == "object") { return ValueType.DICT; }
    throw new Error(`Value of type '${typeof jsValue}' could not be classified.`);
}


export function getValueDescription(value: any, max_length?: number): string {
    if (max_length == undefined) { max_length = 80; }
    const type = getValueType(value);

    if (type == ValueType.INT) { return String(value); }
    else if (type == ValueType.FLOAT) { return String(value); }
    else if (type == ValueType.STRING) {
        if (value.length > max_length) { return value.substr(0, max_length) + " ..."; }
        else { return value; }
    }
    else if (type == ValueType.BOOL) { return String(value); }
    else if (type == ValueType.BYTES) {
        return "";
    }
    else if (type == ValueType.LIST) {
        return "Length: " + value.length;
    }
    else if (type == ValueType.DICT) {
        let desc = "Keys: [" + Object.keys(value).join(', ') + "]";
        return desc;
    }
    else if (type == ValueType.DATA_FRAME) {
        return "Length: " + value.length;
    }
    else if (type == ValueType.NDARRAY) {
        return "Shape: " + value.shape.join(', ') + " Type: " + value.type;
    }
    else {
        return "Unknown type: " + type;
    }
}


export function valueHasKeyPath(value: any, keys: string[]): boolean {
    if (keys.length == 0) { return true; }

    let subValue = value;
    for (let i=0; i<keys.length; i++) {
        const subValueType = getValueType(subValue);
        if (subValueType != ValueType.DICT && subValueType != ValueType.LIST) { return false; }
        if (!(keys[i] in subValue)) { return false; }
        subValue = subValue[keys[i]];
    }
    return true;
}


export function getSubValue(value: any, keys: string[]) {
    if (keys.length == 0) { return value; }
    let subValue = value;
    for (let i=0; i<keys.length; i++) {
        subValue = subValue[keys[i]];
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
