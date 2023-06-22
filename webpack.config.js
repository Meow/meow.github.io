const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    'application.js': './js/application.js',
    'application': './scss/application.scss'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, './docs'),
  },
  optimization: {
    minimize: !isDevelopment,
    providedExports: true,
    usedExports: true,
    concatenateModules: true,
  },
  performance: { hints: false },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'scss/common/'),
      layouts: path.resolve(__dirname, 'scss/layouts/'),
      views: path.resolve(__dirname, 'scss/views/'),
      components: path.resolve(__dirname, 'js/components/'),
      lib: path.resolve(__dirname, 'js/lib/')
    },
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff2?)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './fonts',
          publicPath: './fonts',
        },
        dependency: { not: ['url'] },
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|webm|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './assets',
          publicPath: './assets',
        },
        dependency: { not: ['url'] },
      },
      {
        test: /index.html$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '.',
          publicPath: '.',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
              url: {
                filter: (url, _resourcePath) => {
                  return !url.startsWith('/');
                }
              }
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                sourceMap: isDevelopment,
                plugins: [
                  require('autoprefixer')(),
                ],
                ident: 'postcss',
                syntax: 'postcss-scss',
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
              sassOptions: {
                quietDeps: true
              }
            }
          },
        ],
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: port,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new IgnoreEmitPlugin(/css\/.*(?<!css)$/),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
