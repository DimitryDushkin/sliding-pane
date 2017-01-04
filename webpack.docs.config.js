const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './docs/src/app.js',
    output: { filename: './docs/dist/bundle.js' },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                      "react",
                      ["es2015", { "modules": false } ]
                    ]
                }
            },

            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './docs/dist/bundle.css',
            allChunks: true
        })
    ]
};
