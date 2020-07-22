const htmlWebpackPlugin = require("html-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: "./src/index.js",

    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" },
            { test: /\.vue$/, use: "vue-loader" },
            { test: /\.css$/, use: ["vue-style-loader", "css-loader"] }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        }),

        new VueLoaderPlugin()
    ]
};