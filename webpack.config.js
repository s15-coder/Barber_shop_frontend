const HtmlWebPackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/js/pages/index.js",
        login_desktop: "./src/js/pages/login_desktop.js",
        login_movil: "./src/js/pages/login_movil.js",
    },
    output: {
        filename: "js/[name].[contentHash].js"
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
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
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false,
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
    // new HtmlWebPackPlugin({
    //     template: './src/html/home.html',
    //     filename: './html/home.html',
    //     chunks: ['home']
    // }),
    // new HtmlWebPackPlugin({
    //         template: './src/html/sign-up.html',
    //         filename: './html/sign-up.html',
    //         chunks: ["signup"]
    //     }),
    //     new HtmlWebPackPlugin({
    //         template: './src/html/two-players.html',
    //         filename: './html/two-players.html',
    //         chunks: ['two']
    //     }),
    //     new HtmlWebPackPlugin({
    //         template: './src/html/three-players.html',
    //         filename: './html/three-players.html',
    //         chunks: ['three']

    //     }),
    //     new HtmlWebPackPlugin({
    //         template: './src/html/four-players.html',
    //         filename: './html/four-players.html',
    //         chunks: ['four']
    //     }),

        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        }),
    ]
}