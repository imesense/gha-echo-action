import * as core from "@actions/core";
import * as github from "@actions/github";

export async function run()
{
    try
    {
        const input = core.getInput("input-string");
        console.log(`${input}!`);

        const output = input;
        core.setOutput("output-string", output);

        const payload = JSON.stringify(github.context.payload, undefined, 2);
        console.log(`Event payload: ${payload}`);
    }
    catch (error)
    {
        if (error instanceof Error)
        {
            core.setFailed(error.message);
        }
    }
}
