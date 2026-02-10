import { fileURLToPath } from "url";
import { dirname, join } from "path";

import rollupPluginLicense from "rollup-plugin-license";

import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config =
{
    input: "src/index.js",

    context: "globalThis",

    output: {
        file: "dist/index.js",
        esModule: true,
        format: "es",
        sourcemap: true
    },

    plugins: [
        commonjs(),

        nodeResolve({
            preferBuiltins: true
        }),

        rollupPluginLicense({
            sourcemap: true,

            banner: {
                content: {
                    file: join(__dirname, "LICENSE.txt"),
                    encoding: "utf-8"
                }
            },

            thirdParty: {
                includePrivate: true,
                includeSelf: true,
                multipleVersions: true,
                output: {
                    file: join(__dirname, "dist", "LICENSE.txt"),
                    encoding: "utf-8"
                }
            }
        })
    ]
};

export default config;
