const htmlWebpackPlugin = require("html-webpack-plugin")
const cleanWebpackPlugin = require("clean-webpack-plugin")
const copyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require("path")

module.exports = {
	mode:'development',
	entry: {
		index: "./src/index.js",
		vendor: "./src/vendor.js"
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '/dist',
		compress: true,
		port: 8888,
		hot: true,
		clientLogLevel: 'none'
	},
	resolve:{
		extensions:[".js",".css"]
	},
	module: {
		rules: [
			{ 
				test: /\.css$/, 
				use: [MiniCssExtractPlugin.loader,'css-loader']
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[path][name].[hash].[ext]'
				}
			}
		]
	},
	plugins: [
		new cleanWebpackPlugin(),
		new htmlWebpackPlugin({
			title: "bundle",
			template: "./src/index.html"
		}),
		new copyPlugin([{
			from: "static",
			to: "static"
		}]),
		new MiniCssExtractPlugin({
			filename: "static/css/main.[hash].css"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: "static/js/[name].[hash].js",
		path: path.resolve(__dirname,"./dist")
	},
	optimization: {
    minimizer: [
			new OptimizeCSSAssetsPlugin({}),
			new UglifyJsPlugin()
    ]
  }
}
