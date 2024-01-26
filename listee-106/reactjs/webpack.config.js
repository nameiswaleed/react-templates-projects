const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const publicPath = '/reactjs/';
// const publicPath = '/';

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  devServer: {
    // contentBase: path.join(__dirname, './public'), // where dev server will look for static files, not compiled
    static: {
    directory: path.join(__dirname, "public"),
  },
  // output: {
  //   path:path.resolve(__dirname, "dist"),
  //   // publicPath: publicPath, // base path where referenced files will be look for
  // },
  // devServer: {
  //   // contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
  //   static: {
  //   directory: path.join(__dirname, "public/"),
  // },
  port: 3002,
  historyApiFallback: true,
  // devMiddleware: {
  //   publicPath: "https://localhost:3001/dist/",
  // },
  // hot: "only",
  //   hot: "only", // hot:true
   
  //  //  publicPath: '/', //relative path to output path where  devserver will look for compiled files
  //   // host: '0.0.0.0',
  //   //  compress: true,
  //    port: 3001, // port number
  //    quiet: true,
  },
  externals: {
   // global app config object
   config: JSON.stringify({
       apiUrl: '',
       publicPath : '/reactjs/'            
   })
 },
 output: {
  filename: 'js/[name].bundle.js',
  path: path.resolve(__dirname, 'dist'), // base path where to send compiled assets
  publicPath: publicPath, // base path where referenced files will be look for
},
 resolve: {
   extensions: ['.tsx', '.ts', '.js', '.jsx'],
   
  
 },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    //   {
    //     test: /\.jsx?$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //     query: {
    //         presets: ['es2015']
    //     }
    // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
    // {
    //   test: /\.(png|jpg|gif)$/i,
    //   use: [
    //     {
    //       loader: 'url-loader',
    //       options: {
    //         limit: 8192,
    //       },
    //     },
    //   ],
    // },
    // {
    //   test: /\.svg$/,
    //   use: [
    //     {
    //       loader: 'svg-url-loader',
    //       options: {
    //         limit: 10000,
    //       },
    //     },
    //   ],
    // },
    {
      test: /\.(jpg|png|svg|gif)$/,
      type: 'asset/resource',
    },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
  }),
    new webpack.HotModuleReplacementPlugin(),
    
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: "./public/index.html",
        filename: "./index.html",
        favicon: './public/favicon.png'
    }),
    new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
  }),
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*"]
}),
  new webpack.ProvidePlugin({ //To automatically load jquery
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  })
  ],
}
