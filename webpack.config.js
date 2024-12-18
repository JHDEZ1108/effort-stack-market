const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),      
      '@static': path.resolve(__dirname, 'src/static'),
      '@slices': path.resolve(__dirname, 'src/slices'),
      '@services': path.resolve(__dirname, 'src/services/'),
    },
  },
  mode: 'production',
  devtool: 'inline-source-map',
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/assets/Logo_Final.ico',
      template: './public/index.html',
      filename: './index.html',
      manifest: './public/manifest.json',
      templateParameters: {
        MESURE_ANALYTICS_ID: process.env.MESURE_ANALYTICS_ID,
        PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
        FIREBASE_TOKEN: process.env.FIREBASE_TOKEN
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-workers.js', to: '' },
        { from: 'public/assets/Logo_Final.ico', to: 'assets' },
        { from: 'public/assets/Logo_Final_144.png', to: 'assets' },
        { from: 'public/assets/Logo_Final_192.png', to: 'assets' },
        { from: 'public/assets/Logo_Final_512.png', to: 'assets' },
      ],
    }),
    new CleanWebpackPlugin(),
		new Dotenv({
			path: './.env',
			safe: true,
			systemvars: true,
			defaults: false,
		}),
    new GenerateSW({
      cacheId: 'EffortStackCache',
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Aumenta el límite a 10 MB
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
