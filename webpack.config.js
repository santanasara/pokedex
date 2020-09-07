const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // define entry file and output
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  // define babel loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        exclude: {
          or: [
            path.resolve(__dirname, 'src/assets/icons'),
            path.resolve(__dirname, 'src/assets/patterns/pokeball.svg'),
          ],
        },
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        exclude: path.resolve(__dirname, 'src/assets/types'),
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './src/assets/patterns/pokeball.svg',
    }),
  ],
};
