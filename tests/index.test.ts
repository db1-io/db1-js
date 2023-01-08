import { describe, test, expect } from "vitest";
import db1 from "../src/client";

describe("db1", () => {
  test("methods", async () => {
    const key = "topic";
    const value = "mytestvalue";

    await db1.setItem(key, value);
    const item = await db1.getItem(key);
    expect(item).toBe(value);
  });
});
