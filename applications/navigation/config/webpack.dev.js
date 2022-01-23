const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const deps = require('../package.json').dependencies;

const PORT = 8081;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${PORT}/`,
    },
    devServer: {
        port: PORT,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'navigation',
            filename: 'remoteEntry.js',
            exposes: {
                './NavigationApp': './src/Navigation',
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
