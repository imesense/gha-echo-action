import { beforeEach, describe, expect, it, jest } from "@jest/globals";

import * as core from "./core.fixture";
import * as github from "./github.fixture";

jest.mock("@actions/core", () => core);
jest.mock("@actions/github", () => github);

const { run } = await import("../src/Action");

describe("Action", () =>
{
    let consoleLog;

    beforeEach(() =>
    {
        jest.clearAllMocks();

        consoleLog = jest.spyOn(console, "log").mockImplementation(() =>
        {
        });
    });

    afterEach(() =>
    {
        consoleLog.mockRestore();
    });

    it("should set output correctly", async () =>
    {
        core.getInput.mockReturnValue("test");
        await run();

        expect(core.setOutput).toHaveBeenCalledWith("output-string", "test");
    });

    it("should get input and set output correctly", async () =>
    {
        const consoleLog = jest.spyOn(console, "log");

        const testInput = "test input";
        core.getInput.mockReturnValue(testInput);
        await run();

        expect(core.getInput).toHaveBeenCalledWith("input-string");
        expect(consoleLog).toHaveBeenCalledWith("test input!");
        expect(core.setOutput).toHaveBeenCalledWith("output-string", "test input");
    });

    it("should log event payload", async () =>
    {
        await run();

        const expectedPayload =
        {
            action: "test",
            repository: {
                name: "test-repo"
            }
        };
        expect(consoleLog).toHaveBeenCalledWith(
            expect.stringContaining("Event payload:")
        );

        const loggedPayload = JSON.parse(
            consoleLog.mock.calls
                .find((call) => call[0].includes("Event payload:"))[0]
                .replace("Event payload: ", "")
        );
        expect(loggedPayload).toEqual(expectedPayload);
    });

    it("should handle errors", async () =>
    {
        const error = new Error("Test error");
        core.getInput.mockImplementation(() =>
        {
            throw error;
        });
        await run();

        expect(core.setFailed).toHaveBeenCalledWith("Test error");
    });
});
