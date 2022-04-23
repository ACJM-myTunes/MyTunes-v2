const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'public'),
          publicPath: '/'
        },
        port: 8080,
        compress: true,
        proxy: { //changes domain request comes from
            '/': 'http://localhost:3000'
        }
     },
    plugins: [new HtmlWebpackPlugin({ template: './client/index.html', title: 'development'})],
    module: {
        rules: [
                {
                    test: /\.jsx?/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                         plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
                    }
                },
                {
                    test: /.(css|scss)$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
        ]
    },

};