const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    entry: {
        index: "./src/js/pages/index.js",
        login_desktop: "./src/js/pages/login_desktop.js",
        login_movil: "./src/js/pages/login_movil.js",
    },
    output: {
        filename: "js/[name].[contentHash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    attributes: false
                }
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }]
            }
        ]
    },
    
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['index']
        }),
        new HtmlWebPackPlugin({
        template: './src/html/login_desktop.html',
        filename: './html/login_desktop.html',
        chunks: ["login_desktop"]
    }),
    new HtmlWebPackPlugin({
    template: './src/html/login_movil.html',
    filename: './html/login_movil.html',
    chunks: ["login_movil"]
}),

        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        }),
    ],
}