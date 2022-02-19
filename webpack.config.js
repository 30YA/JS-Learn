const path = require('path');

module.exports = {
  entry: {
      script: './src/JS/script.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/JS'),
    filename: '[name].bundle.js',
  },
};