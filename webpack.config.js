const path = require('path')
//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
    //设置生成预览页面的模板文件
    template: "./src/index.html",
    //设置生成的预览页面名称
    filename: "index.html"
})
module.exports = {
    mode: "development",//可以设置为development(开发模式)，production(发布模式),
    entry: path.join(__dirname, './src/main.js'),//__dirname是webpack.config.js所在的路径
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins:[ htmlPlugin ]
}