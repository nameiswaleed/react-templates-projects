// webpack config
const path = require('path');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { VueLoaderPlugin } = require('vue-loader');

const publicPath = '/';

module.exports = (env = {}) => ({
  context: path.resolve(__dirname, 'src'),
  mode: env.production ? 'production' : 'development',
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:6].bundle.js",
    publicPath: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!bootstrap-vue\/src\/)/,
        loader: "babel-loader"
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
     },
      { // config for sass compilation
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
    },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': '@vue/runtime-dom',
      'bootstrap-vue$': 'bootstrap-vue/src/index.js',
      Assets: path.resolve(__dirname, 'src/assets/'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new WebpackBar(),
    new VueLoaderPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src/public'),
    publicPath: process.env.BASE_URL,
    index: './index.html',
    hot: true,
    stats: 'minimal',
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true,
  }
});
