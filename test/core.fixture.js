import { jest } from '@jest/globals';

export const getInput = jest.fn().mockImplementation(name =>
{
    if (name === "input-string")
    {
        return "test input";
    }
    return "";
});

export const setOutput = jest.fn();
export const setFailed = jest.fn();
