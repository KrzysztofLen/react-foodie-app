const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/', //TODO change it during implement AWS
    },
};

module.exports = merge(commonConfig, prodConfig);
