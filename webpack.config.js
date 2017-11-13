const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'aet',
            template: './index.html'
        })
    ],
    target: 'node',
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".node"]
    },
    devtool: 'cheap-eval-source-map'
};