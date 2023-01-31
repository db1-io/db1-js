import { Table } from '@apache-arrow/es5-esm';


export function getValueType(jsValue: any): string {
    if (typeof jsValue == "number" && Number.isInteger(jsValue)) { return "int"; }
    if (typeof jsValue == "number") { return "float"; }
    if (typeof jsValue == "string") { return "string"; }
    if (typeof jsValue == "boolean") { return "bool"; }
    if (typeof jsValue == "object" && jsValue instanceof Table) { return "data_frame"; }
    if (typeof jsValue == "object" && jsValue.constructor == Uint8Array) { return "bytes"; }
    if (typeof jsValue == "object" && jsValue.constructor == Array) { return "list"; }
    if (typeof jsValue == "object" && "__value_type__" in jsValue && jsValue["__value_type__"] == "ndarray") { return "ndarray"; }
    if (typeof jsValue == "object") { return "dict"; }
    throw new Error(`Value of type '${typeof jsValue}' could not be classified.`);
}


export function getValueDescription(value: any, max_length?: number): string {
    if (max_length == undefined) { max_length = 80; }
    const type = getValueType(value);

    if (type == "int") { return String(value); }
    else if (type == "float") { return String(value); }
    else if (type == "string") {
        if (value.length > max_length) { return value.substr(0, max_length) + " ..."; }
        else { return value; }
    }
    else if (type == "bool") { return String(value); }
    else if (type == "bytes") {
        return "";
    }
    else if (type == "list") {
        return "Length: " + value.length;
    }
    else if (type == "dict") {
        let desc = "Keys: [" + Object.keys(value).join(', ') + "]";
        return desc;
    }
    else if (type == "data_frame") {
        return "Length: " + value.length;
    }
    else if (type == "ndarray") {
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
        if (subValueType != "dict" && subValueType != "list") { return false; }
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
