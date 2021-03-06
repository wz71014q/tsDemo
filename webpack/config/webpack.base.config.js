const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  context: path.resolve(__dirname, '../../'),
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../../dist'), // 打包后的文件存放的地方
    filename: '[name].[hash:8].js'// 打包后输出文件的文件名
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.jsx', '.ts', '.tsx'],
    mainFiles: ['index'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../../src')
    }
  },
  module: {
    rules: [
      {
        test: /(\.html|\.xml)$/,
        use: [
          {
            loader: 'html-loader',
          }
        ],
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
          fix: true,
          emitError: false,
          emitWarning: false,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: { appendTsxSuffixTo: [/\.vue$/] }
          },
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: "[name].[hash:8].[ext]",
          publicPath: "./images/", // 打包后CSS引入的基础路径
          outputPath: "images/" // 打包后输出目录
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:8].[ext]',
          publicPath: "./media/",
          outputPath: "media/"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:8].[ext]',
          publicPath: "./fonts/",
          outputPath: "fonts/"
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin({
      log: true
    })
  ],
};