import { describe, test, expect } from "vitest";
import { db1 } from "../src/index";

const VALUE_LIST = {
    "int": 465,
    "float": 846.346,
    "string": "Hello World!",
    "bool": true,
    "bool_false": false,
    // "bytes": Uint8Array([123123]),
    "list": [1, 2, 3, 45, "asd", 3244],
    "nested_list": [[1, 2, 3], [4, 5, 6], [[7, 8], [9, 10]]],
    "nested_list_dict": [
        [1, 2, 3],
        [4, 5, 6],
        [[7, 8], [9, 10], {"a": 1, "b": 2, "c": 3}],
        {"e": {"f": 3, "g": 4, "h": 5}},
    ],
    "dict": {"a": 1, "b": 2, "c": 3},
    "nested_dict": {"a": {"b": 1, "c": 2}, "d": {"e": {"f": 3, "g": 4, "h": 5}}},
    "nested_dict_list": {
        "a": {"b": 1, "c": 2},
        "d": {"e": {"f": 3, "g": 4, "h": 5, "i": [[7, 8], [9, 10]]}, "j": [9, 10]},
    },
    // "ndarray": np.array([1, 2, 3, 4]),
    // "ndarray_large": np.random.rand(10, 10, 10),
    // "dataframe": pd.DataFrame(data={"col1": [1, 2], "col2": [3, 4]}),
}


describe("db1", () => {

    test("getValueType int", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["int"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.INT64_);
    });

    test("getValueType float", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["float"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.FLOAT_);
    });

    test("getValueType string", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["string"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.STRING_);
    });

    test("getValueType bool", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["bool"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.BOOL_);
    });

    test("getValueType bool_false", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["bool_false"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.BOOL_);
    });

    test("getValueType list", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["list"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.LIST);
    });

    test("getValueType nested_list", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["nested_list"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.LIST);
    });

    test("getValueType nested_list_dict", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["nested_list_dict"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.LIST);
    });

    test("getValueType dict", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["dict"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.DICT);
    });

    test("getValueType nested_dict", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["nested_dict"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.DICT);
    });

    test("getValueType nested_dict_list", async () => {
        const type = db1.utils.getValueType(VALUE_LIST["nested_dict_list"]);
        expect(type).toBe(db1.utils.PROTO_TYPE.DICT);
    });



    test("valueHasKeyPath 1", async () => {
        const keyPath = ["d", "e", "i", "0"];
        const hasKeyPath = db1.utils.valueHasKeyPath(VALUE_LIST["nested_dict_list"], keyPath);
        expect(hasKeyPath).toBe(true);
    });

    test("valueHasKeyPath 2", async () => {
        const keyPath = ["d", "i", "0", "a"];
        const hasKeyPath = db1.utils.valueHasKeyPath(VALUE_LIST["nested_dict_list"], keyPath);
        expect(hasKeyPath).toBe(false);
    });

    test("valueHasKeyPath 3", async () => {
        const keyPath = ["0"];
        const hasKeyPath = db1.utils.valueHasKeyPath(VALUE_LIST["nested_dict_list"], keyPath);
        expect(hasKeyPath).toBe(false);
    });


    test("getSubValue", async () => {
        const keyPath = ["d", "e", "i", "0"];
        const subValue = db1.utils.getSubValue(VALUE_LIST["nested_dict_list"], keyPath);
        expect(subValue).toEqual([7, 8]);
    });


    const key = "test";

    test("getItemAndMetaVariables", async () => {
        const item = await db1.getItemAndMetaVariables(key);
    });
    


    test("int", async () => {
        const value = VALUE_LIST["int"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toBe(value);
    });

    test("float", async () => {
        const value = VALUE_LIST["float"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toBeCloseTo(value);
    });

    test("string", async () => {
        const value = VALUE_LIST["string"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toBe(value);
    });

    test("bool", async () => {
        const value = VALUE_LIST["bool"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toBe(value);
    });

    test("bool_false", async () => {
        const value = VALUE_LIST["bool_false"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toBe(value);
    });

    test("list", async () => {
        const value = VALUE_LIST["list"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toEqual(value);
    });

    test("nested_list", async () => {
        const value = VALUE_LIST["nested_list"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toEqual(value);
    });

    test("nested_list_dict", async () => {
        const value = VALUE_LIST["nested_list_dict"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toEqual(value);
    });

    test("dict", async () => {
        const value = VALUE_LIST["dict"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toEqual(value);
    });

    test("nested_dict", async () => {
        const value = VALUE_LIST["nested_dict"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toEqual(value);
    });

    test("nested_dict_list", async () => {
        const value = VALUE_LIST["nested_dict_list"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toEqual(value);
    });
    
    // // test("remove", async () => {
    // //     await db1.setItem(key, 1);
    // //     await db1.removeItem(key);
    // //     const item = await db1.getItem(key);
    // //     expect(item).toBe(undefined);
    // // });
});
