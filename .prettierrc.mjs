/**
 * @type {import("prettier").Config}
 */
const config =
{
    tabWidth: 4,
    useTabs: false,
    semi: true,
    trailingComma: "none",
    arrowParens: "always",
    endOfLine: "lf",
    singleQuote: false,

    overrides: [
        // NPM manifests
        {
            files: ["package*.json"],
            options: {
                tabWidth: 2
            }
        },

        // JavaScript sources
        {
            files: ["src/**/*.js", "test/**/*.js"],
            options: {
                tabWidth: 4,
                braceStyle: "allman",
                plugins: [
                    "prettier-plugin-brace-style"
                ]
            }
        }
    ]
};

export default config;
