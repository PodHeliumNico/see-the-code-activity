const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "See The Code",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/scripts/puzzles"),
                    to: path.resolve(__dirname, "dist/puzzles"),
                },
            ],
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        runtimeChunk: "single",
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
};
