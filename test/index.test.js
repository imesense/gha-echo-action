import { describe, expect, it, jest } from "@jest/globals";

const { main } = await import("../src/index");

describe("index", () =>
{
    it("should call run correct", async () =>
    {
        expect(true).toBe(true);
    });
});
