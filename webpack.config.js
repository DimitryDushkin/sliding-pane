const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    reactExternal = {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
    },
    reactDOMExternal = {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
    },
    reactModalExternal = {
        root: 'ReactModal',
        commonjs2: 'react-modal',
        commonjs: 'react-modal',
        amd: 'react-modal'
    },
    propTypes = {
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types'
    };

module.exports = {
    entry: {
        'react-sliding-pane': './src/index.js'
    },
    externals: {
        'react': reactExternal,
        'react-dom': reactDOMExternal,
        'react-modal': reactModalExternal,
        'prop-types': propTypes
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: '/',
        libraryTarget: 'umd',
        library: 'ReactSlidingPane',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],

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
    }
}
