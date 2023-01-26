const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
   mode: 'development',
   entry: path.resolve(__dirname, 'src', 'index.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
   /*   assetModuleFilename: 'img/[name][ext]',*/
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'src/index.html'),
         inject: 'body'
      }),
      new MiniCssExtractPlugin({
         filename: 'main.css'
      }),
   ],
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: 'html-loader',
         },
         {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|jpe?g|svg|gif)$/i,
            type: 'asset/resource',
            generator: {
               filename: 'img/[name][ext]',
            }
         },
         {
            test: /\.(woff|woff2)$/i,
            type: 'asset/resource',
            generator: {
               filename: 'fonts/[name][ext]',
            }
         },
      ],
   },
};