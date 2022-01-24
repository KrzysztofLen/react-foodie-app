const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const PORT = 8082;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${PORT}/`,
    },
    devServer: {
        port: PORT,
        historyApiFallback: true,
    },
};

module.exports = merge(commonConfig, devConfig);
