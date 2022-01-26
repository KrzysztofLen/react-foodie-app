const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const deps = require('../package.json').dependencies;

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
    plugins: [
        new ModuleFederationPlugin({
            name: 'list',
            filename: 'remoteEntry.js',
            exposes: {
                './ListApp': './src/List',
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
                primereact: {
                    singleton: true,
                    requiredVersion: deps.primereact,
                },
            },
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
