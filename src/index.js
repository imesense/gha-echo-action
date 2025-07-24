import { run } from './Action';

export async function main()
{
    await run();
}

const isMain = process.argv[1] === new URL(import.meta.url).pathname;
if (isMain)
{
    main();
}
