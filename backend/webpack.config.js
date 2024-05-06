const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production', // or 'development' based on your needs
  entry: './server.js', // Entry point of your server-side code
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader', // Use node-loader to handle .node files
      },
    ],
  },
  // Add other necessary loaders or plugins here, if any
};