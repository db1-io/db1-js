import { describe, test, expect } from "@jest/globals";
import db1 from "../src/index";

describe("db1", () => {
  test("methods", async () => {
    const key = "topic";
    const value = "mytestvalue";

    await db1.setItem(key, value);
    const item = await db1.getItem(key);
    expect(item).toBe(value);
  });
});
