const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Match JS, JSX, TS, and TSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader for JSX and JS files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use presets for React and modern JavaScript
          },
        },
      },
      {
        test: /\.tsx?$/, // Match TS and TSX files
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader for TypeScript files
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname)
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Allow imports without file extensions
    fallback: {"path": false},
  },
  devtool: 'source-map',
};
