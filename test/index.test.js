import { beforeEach, describe, expect, it, jest } from '@jest/globals';

const { main } = await import('../src/index');

describe('index', () =>
{
    let consoleLog;

    beforeEach(() =>
    {
        jest.clearAllMocks();

        consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() =>
    {
        consoleLog.mockRestore();
    });

    it('should call run correct', async () =>
    {
        const consoleLog = jest.spyOn(console, 'log');

        await main();

        expect(consoleLog).toHaveBeenCalledWith("Event payload: {}");
    });
});
