const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getGlobalConfig = require('../../webpack.config')

module.exports = (env) => {
    const globalConfig = getGlobalConfig(env)
    return {
        mode: globalConfig.mode,
        output: globalConfig.output,
        resolve: globalConfig.resolve,
        module: globalConfig.module,
        optimization: globalConfig.optimization,
        devtool: globalConfig.devtool,
        devServer: {
            ...globalConfig.devServer,
            port: 8080,
        },

        entry: {
            toolkit: './src/index.tsx',
        },

        plugins: [
            ...globalConfig.plugins,
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                title: 'Toolkit',
            }),
        ],
    }
}
