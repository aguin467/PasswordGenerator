const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/generate.js',

    mode: 'development',

    output: {

        filename: '[name].bundle.js',

        path: path.resolve(__dirname, 'dist')

    },

    optimization: {

        minimize: true

    },

    module: {

        rules: [

            {
                test: /\.html$/,

                exclude: /node_modules/,

                use: {
                    loader: 'html-loader'
                },
            },
            
            {

                test: /\.js$/,

                exclude: /node_modules/,

                use: {

                    loader: 'babel-loader',

                    options: {

                        presets: ['@babel/preset-env']

                    }

                }

            },

            {

                test: /\.css$/,

                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],

            },

            {

                test: /\.(png|jpg|gif|ico)$/,

                use: [

                    {

                        loader: 'file-loader'

                    },

                ],

            },

        ]

    },

    devtool: 'source-map',

    devServer: {

        contentBase: './dist',

        open: true,

        port: 8080,

    },

    plugins: [

        new HtmlWebpackPlugin({

            title: 'Webpack Output',
            template: 'src/index.html'

        }),
    ],

};



