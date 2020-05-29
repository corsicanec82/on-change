const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public'),
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
