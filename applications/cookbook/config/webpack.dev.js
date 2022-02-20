const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const path = require('path');

const deps = require('../package.json').dependencies;

const PORT = 8083;

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
            name: 'cookbook',
            filename: 'remoteEntry.js',
            exposes: {
                './CookbookApp': './src/Cookbook',
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
