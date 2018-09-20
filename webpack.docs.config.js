const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './docs/src/app.js',
    output: {
        path: path.resolve(__dirname, "docs/dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    devtool: 'source-map'
};
