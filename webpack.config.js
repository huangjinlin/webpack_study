const path = require('path')
module.exports = {
    mode:"development",//可以设置为development(开发模式)，production(发布模式),
    entry: path.join(__dirname, './src/main.js'),//__dirname是webpack.config.js所在的路径
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
}