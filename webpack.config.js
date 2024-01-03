const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode= process.env.NODE_ENV != 'production';


module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'

            },
            {
                test: /\.css$/,
                use: [
                    //MiniCssExtractPlugin.loader,  // Cambiado 'style-loader' a MiniCssExtractPlugin.loader
                   devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                   'css-loader'

                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'  // Corregido 'scr' a 'src'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
};
