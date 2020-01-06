const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'useKeyCapture.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: 'babel-loader'
      }
    ]
  }
};
