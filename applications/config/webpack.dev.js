const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

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
};

module.exports = merge(commonConfig, devConfig);
