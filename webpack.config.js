const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CompressionPlugin = require("compression-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const VENDORS = [
	'react', 'react-router-dom', 'd3-selection', 'node-uuid', 'gsap', 'react-image-gallery', 'react-router-transition', 'css-loader!mini.css', "react-swipeable", "react-transition-group"]

module.exports = {
	entry: {
		bundle: './src/index.jsx',
		vendor: VENDORS
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].[chunkhash].js',
		publicPath: '/'
	},
	resolve: {
		modules: [path.resolve(__dirname, "./src"), "node_modules", path.resolve(__dirname, "./src/components"), path.resolve(__dirname, "./src/api"), path.resolve(__dirname, "./src/vendors")],
		alias: {
			applicationStyles: path.resolve(__dirname, "./src/styles/main.scss")
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
		},
			{
				test: /\.scss$/,
				use: [{
					loader: 'sass-loader',
					options: {
						includePaths: [path.resolve(__dirname, './node_modules/mini.css/src/'),
					path.resolve(__dirname, './node_modules/react-image-slider/lib/')]
					}
			}]
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new CleanWebpackPlugin(['public'], {
			root: path.resolve(__dirname),
			verbose: true,
			dry: false,
			exclude: ['fonts', 'favicon.ico', 'assets']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		mangle: true,
	// 		compress: {
	// 			warnings: false, // Suppress uglification warnings
	// 			pure_getters: false,
	// 			unsafe: true,
	// 			unsafe_comps: true,
	// 			screw_ie8: true
	// 		},
	// 		output: {
	// 			comments: false,
	// 		},
	// 		exclude: [/\.min\.js$/gi] // skip pre-minified libs
	// 	})
	],
	devServer: {
		contentBase: path.join(__dirname, "public"),
		port: 9000,
		historyApiFallback: true,
		host: "0.0.0.0",
		disableHostCheck: true
	},
	devtool: 'cheap-module-eval-source-map'
};
