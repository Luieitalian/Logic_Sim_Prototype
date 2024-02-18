const path = require('path');

module.exports = {
  mode: 'development',
  entry: './build/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
