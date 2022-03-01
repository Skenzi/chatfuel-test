const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new VueLoaderPlugin(),
    ]
}