var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var outputFile;

var plugins = [
    new HtmlWebpackPlugin({
        title: 'React',
        template: path.resolve(__dirname, 'app/templates/index.ejs'),
        inject: 'body'
    })];
    if(env === 'build'){
        plugins.push(new UglifyJsPlugin({ minimize: true }));
        outputFile = '[name]bundle.min.js';
    }
    else{
        outputFile = 'bundle.js';
    }

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3001',
        './app/js/index.js'
    ],
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: outputFile,
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
                include: path.resolve(__dirname, 'app')
            },
            {
                test:/\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: plugins,
    devtool: 'source-map',
}
module.exports = config;