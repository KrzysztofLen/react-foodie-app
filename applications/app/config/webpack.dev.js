const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const path = require('path');

const deps = require('../package.json').dependencies;

const PORT = 8080;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${PORT}/`,
    },
    devServer: {
        port: PORT,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                navigation: 'navigation@http://localhost:8081/remoteEntry.js',
                list: 'list@http://localhost:8082/remoteEntry.js',
                cookbook: 'cookbook@http://localhost:8083/remoteEntry.js',
                cart: 'cart@http://localhost:8084/remoteEntry.js',
                footer: 'footer@http://localhost:8085/remoteEntry.js',
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
