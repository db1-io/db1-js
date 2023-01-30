import { describe, test, expect } from "vitest";
import { db1 } from "../src/index";


const VALUE_LIST = {
    "int": 465,
    "float": 846.346,
    "str": "Hello World!",
    "bool_true": true,
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
    const key = "test";

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

    test("str", async () => {
        const value = VALUE_LIST["str"];
        await db1.setItem(key, value);
        const item = await db1.getItem(key);
        expect(item).toBe(value);
    });

    test("bool_true", async () => {
        const value = VALUE_LIST["bool_true"];
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
    
    // test("remove", async () => {
    //     await db1.setItem(key, 1);
    //     await db1.removeItem(key);
    //     const item = await db1.getItem(key);
    //     expect(item).toBe(undefined);
    // });
});
