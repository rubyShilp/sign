const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.common");
module.exports = merge(commonConfig, {
    output: {
        path: path.join(process.cwd(), "dist"),
        publicPath: "http://localhost:8086/",
        filename: "[name].bundle[hash:7].js",
        chunkFilename: "[id].chunk[hash:7].js",
        libraryTarget: "umd",
        umdNamedDefine: true,
        globalObject: "this",
    },
    devServer: {
        port: 8086,
        compress: true,
        allowedHosts: "all",
        historyApiFallback: true,
        //代理访问后台地址
        proxy: [
            {
                context: ["/v1"],
                target: "http://8.219.214.239:59211", // 测试
                changeOrigin: true,
            },
        ],
    },
});
