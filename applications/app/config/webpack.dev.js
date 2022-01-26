const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const deps = require('../package.json').dependencies;

const PORT = 8080;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${PORT}/`,
    },
    devServer: {
        port: PORT,
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                navigation: 'navigation@http://localhost:8081/remoteEntry.js',
                list: 'list@http://localhost:8082/remoteEntry.js',
                cookbook: 'cookbook@http://localhost:8083/remoteEntry.js',
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
