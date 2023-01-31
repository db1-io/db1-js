import { tableFromIPC, tableToIPC } from '@apache-arrow/es5-esm';

import * as serializerPb from "../proto_stubs/serializer/serializer_pb";
import { getValueType } from "./utils";

function encodeInt(jsValue: number): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.INT64_;
    pbValue.int64_ = jsValue;
    return pbValue;
}


function decodeInt(pbValue: serializerPb.Value): number {
    return Number(pbValue.int64_);
}


function encodeFloat(jsValue: number): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.FLOAT_;
    pbValue.float_ = jsValue;
    return pbValue;
}


function decodeFloat(pbValue: serializerPb.Value): number {
    return pbValue.float_;
}


function encodeString(jsValue: string): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.STRING_;
    pbValue.string_ = jsValue;
    return pbValue;
}


function decodeString(pbValue: serializerPb.Value): string {
    return pbValue.string_;
}


function encodeBool(jsValue: boolean): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.BOOL_;
    pbValue.bool_ = jsValue;
    return pbValue;
}


function decodeBool(pbValue: serializerPb.Value): boolean {
    return pbValue.bool_;
}


function encodeBytes(jsValue: Uint8Array): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.BYTES_;
    pbValue.bytes_ = jsValue;
    return pbValue;
}


function decodeBytes(pbValue: serializerPb.Value): Uint8Array {
    return pbValue.bytes_;
}


function encodeList(jsValue: any[]): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.LIST;
    for (const i in jsValue) {
        pbValue.list.push(encodeValue(jsValue[i]));
    }
    return pbValue;
}


function decodeList(pbValue: serializerPb.Value): any[] {
    let jsValue = [];
    for (const i in pbValue.list) {
        jsValue.push(decodeValue(serializerPb.Value.create(pbValue.list[i])))
    }
    return jsValue;
}


function encodeDict(jsValue: {[key: string]: any}): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.DICT;
    let keys = [];
    let values = []
    for (const key in jsValue) {
        keys.push(key);
        values.push(encodeValue(jsValue[key]));
    }
    let dict_ = serializerPb.Dict.create({keys: keys, values: values});
    pbValue.dict = dict_;
    return pbValue;
}


function decodeDict(pbValue: serializerPb.Value): {[key: string]: any} {
    let jsValue = <{ [key: string]: any }>{};
    for (const i in pbValue.dict.keys) {
        jsValue[pbValue.dict.keys[i]] = decodeValue(serializerPb.Value.create(pbValue.dict.values[i]));
    }
    return jsValue;
}


function encodeNdarray(jsValue: any): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.NDARRAY;
    const param: any = {
        bytes: jsValue.bytes,
        shape: jsValue.shape,
        type: jsValue.type    
    }
    let ndarray = serializerPb.NDArray.create(param);
    pbValue.ndarray = ndarray;
    return pbValue;
}


function decodeNdarray(pbValue: serializerPb.Value): any {
    let jsValue = <{ [key: string]: any }>{};
    jsValue = {
        __value_type__: "ndarray",
        bytes: Uint8Array.from(pbValue.ndarray.bytes_),
        shape: pbValue.ndarray.shape,
        type: pbValue.ndarray.type
    };
    return jsValue;
}


function encodeDataFrame(jsValue: any): serializerPb.Value {
    let pbValue = serializerPb.Value.create();
    pbValue.type = serializerPb.Value.Type.DATAFRAME;
    pbValue.bytes_ = tableToIPC(jsValue);
    return pbValue;
}


function decodeDataFrame(pbValue: serializerPb.Value): any {
    return tableFromIPC(pbValue.bytes_);
}


const ENCODERS: { [jsType: string]: { (jsValue: any): serializerPb.Value; }; } = {
    "int": encodeInt,
    "float": encodeFloat,
    "string": encodeString,
    "bool": encodeBool,
    "bytes": encodeBytes,
    "list": encodeList,
    "dict": encodeDict,
    "ndarray": encodeNdarray,
    "data_frame": encodeDataFrame
}


const DECODERS: { (jsValue: serializerPb.Value): any; } [] = [
    decodeInt,
    decodeFloat,
    decodeString,
    decodeBool,
    decodeBytes,
    decodeList,
    decodeDict,
    decodeNdarray,
    decodeDataFrame
]


export const jsTypes = ["int", "float", "string", "bool", "bytes", "list", "dict", "ndarray, data_frame"];


function encodeValue(jsValue: any): serializerPb.Value {
    const jsType = getValueType(jsValue);
    return ENCODERS[jsType](jsValue);
}


function decodeValue(pbValue: serializerPb.Value): any {
    return DECODERS[pbValue.type - 1](pbValue);
}


export function dumps(jsValue: any): Uint8Array {
    let pbValue = encodeValue(jsValue);
    return serializerPb.Value.encode(pbValue).finish();
}


export function loads(pbValue: Uint8Array): any {
    let pbValueObj = serializerPb.Value.decode(pbValue);
    return decodeValue(pbValueObj);
}
