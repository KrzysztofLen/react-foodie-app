const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const deps = require('../package.json').dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'footer',
            filename: 'remoteEntry.js',
            remotes: {
                navigation: 'navigation@http://localhost:8081/remoteEntry.js', //TODO change later for production remote
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

module.exports = merge(commonConfig, prodConfig);
