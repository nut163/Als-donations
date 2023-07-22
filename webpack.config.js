const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/scripts/main.js',
    about: './src/scripts/about.js',
    donate: './src/scripts/donate.js',
    als_info: './src/scripts/als_info.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      filename: 'donate.html',
      template: './src/donate.html',
      chunks: ['donate']
    }),
    new HtmlWebpackPlugin({
      filename: 'als_info.html',
      template: './src/als_info.html',
      chunks: ['als_info']
    })
  ]
};