const webpack = require("webpack");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: {
        main: ["./scripts/polyfill.js"],
        app: ["./scripts/main.js"],
    },
    context: path.join(process.cwd(), "app"),
    resolve: {
        modules: ["node_modules", path.resolve(process.cwd(), "app")],
        alias: {
            vue: path.resolve(process.cwd(), "./node_modules/vue/dist/vue.min.js"),
            "vue-router": path.resolve(process.cwd(), "./node_modules/vue-router/dist/vue-router.min.js"),
            vuex: path.resolve(process.cwd(), "./node_modules/vuex/dist/vuex.min.js"),
            md5: path.resolve(process.cwd(), "./node_modules/md5/md5.js"),
            "@": path.resolve(process.cwd(), "app/scripts"),
        },
        extensions: [".vue", ".js", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader?cacheDirectory=true",
                    options: {
                        plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import", "transform-vue-jsx"],
                        presets: ["@babel/preset-env"],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                },
                generator: {
                    filename: "images/[base]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|ico|swf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[base]",
                },
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, //loader取代style.loader,作用，提取js中的css文件
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },
    performance: {
        hints: false,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendors: {
                    test: /[\\\/]node_modules[\/\\]/,
                    filename: "[id]_vendors.js",
                },
                default: {
                    minChunks: 2,
                    filename: "[id]_default.js",
                    priority: -20,
                },
            },
        },
        runtimeChunk: true,
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].bundle[hash:7].css",
        }),
        new CopyWebpackPlugin([
            {
                from: "../static",
                to: "./static",
                ignore: [".*"],
            },
        ]),
        new HtmlWebpackPlugin({
            template: "./index.html",
            favicon: "./favicon.ico",
            filename: "index.html",
            hash: true, //防止缓存
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            chunksSortMode: "none",
        }),
    ],
};
