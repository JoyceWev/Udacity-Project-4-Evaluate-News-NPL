const path = require('path');
const webpack = require('webpack');
const json = require('./package.json');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'production',
	entry: './src/client/index.js',
	module: {
		rules: [
			{
				test: '/\.js$/',
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				type: 'javascript/auto',
				test: '/\.json$/',
        		loader: 'json-loader'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/client/views/index.html",
			filename: "./index.html",
		})
	]
	//output: { ...output options }
}