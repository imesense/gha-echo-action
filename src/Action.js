import * as core from "@actions/core";
import * as github from "@actions/github";

async function run()
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
        core.setFailed(error.message);
    }
}

export default run;
