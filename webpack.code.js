
//--------------------------------------------------
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "build"),
};

module.exports = {
  // Entries have to resolve to files! They rely on Node
  // convention by default so if a directory contains *index.js*,
  // it resolves to that.
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    }),
  ],
};
//--------------------------------------------------
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
//--------------------------------------------------
const CleanWebpackPlugin = require('clean-webpack-plugin');
 plugins: [ new CleanWebpackPlugin(['dist']),   new HtmlWebpackPlugin({   title: 'Output Management'   })    ]
//--------------------------------------------------
module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  }, 
  watch: true
}
//--------------------------------------------------
module.exports = {
  entry: ["./global.js", "./app.js"],
  output: {
    filename: "bundle.js"
  }
}
//--------------------------------------------------
module.exports = {
 entry: ["./global.js" , "./app.js"],
 output: {
   filename: "bundle.js"
 },
 module: {
   loaders: [
     {
       test: /\.es6$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
}
//--------------------------------------------------
module.exports = {
 entry: ["./global.js" , "./app.js"],
 output: {
   filename: "bundle.js"
 },
 module: {
   preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
   ],
   loaders: [
     {
       test: /\.es6$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
          cacheDirectory: true, 
          presets: ['react', 'es2015'] 
       }
      }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}
//--------------------------------------------------
var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

//--------------------------------------------------

