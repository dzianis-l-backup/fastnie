const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
    console.log('environment', env)
    return {
        entry: {
            index: './src/index.js',
        },

        mode: env.production ? 'production' : 'development',

        output: {
            filename: '[name].js',
            clean: true,
            path: path.resolve(__dirname, 'dist'),
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: '>5%',
                                    },
                                ],
                                ['@babel/preset-react'],
                            ],
                        },
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
            port: 8080,
        },

        devtool: 'source-map',

        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                title: 'Todos',
            }),
            new CleanWebpackPlugin(),

            new webpack.HotModuleReplacementPlugin(),
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDOM: 'react-dom',
                PropTypes: 'prop-types',
            }),
            new webpack.DefinePlugin({
                'ENV.production': JSON.stringify(env.production),
            }),
        ],
    }
}
