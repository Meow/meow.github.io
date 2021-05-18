const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    'application.js': './js/application.js',
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
      views: path.resolve(__dirname, 'scss/views/')
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
        test: /application\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              sourceMaps: isDevelopment,
              name: '[name].css',
              outputPath: '.',
              publicPath: '.',
            },
          },
          { loader: 'extract-loader', options: { sourceMaps: isDevelopment } },
          { loader: 'css-loader', options: { sourceMap: isDevelopment } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              postcssOptions: {
                plugins: [
                  require('autoprefixer')(),
                ],
                ident: 'postcss',
                syntax: 'postcss-scss',
              }
            },
          },
          { loader: 'sass-loader', options: { sourceMap: isDevelopment } },
        ],
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: port,
    historyApiFallback: true,
    open: true
  }
};
