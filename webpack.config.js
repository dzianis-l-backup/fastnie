const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
    return {
        mode: env.production ? 'production' : 'development',

        output: {
            filename: '[name].js',
            clean: true,
            path: path.resolve(__dirname, 'dist'),
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },

        module: {
            rules: [
                {
                    test: /\.ts(x)?$/,
                    use: {
                        loader: 'ts-loader',
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    exportLocalsConvention: 'camelCase',
                                    localIdentName: '[local]@@[hash:base64:3]',
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
            ],
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        name: 'vendor',
                        test: /node_modules/,
                    },
                },
            },
        },

        devServer: {
            hot: true,
        },

        devtool: 'eval-source-map',

        plugins: [
            new CleanWebpackPlugin(),
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDOM: 'react-dom',
            }),
        ],
    }
}
