const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...other Webpack configuration...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // Update this to your HTML template file path
    }),
    // ...other plugins...
  ],
};
