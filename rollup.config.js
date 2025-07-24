import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const config =
{
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        esModule: true,
        format: 'es',
        sourcemap: true
    },
    plugins: [
        commonjs(),
        nodeResolve({
            preferBuiltins: true
        })
    ]
};

export default config;
