const core = require("@actions/core");
const github = require("@actions/github");

try
{
    const input = core.getInput("input-string");
    console.log(`${input}!`);

    const output = input;
    core.setOutput("output-string", output);

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`Event payload: ${payload}`);
}
catch (error)
{
    core.setFailed(error.message);
}
