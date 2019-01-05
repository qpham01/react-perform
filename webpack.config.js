const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:['babel-polyfill','./source/client.js'],
	output:{
		path:"./",
		filename:'index.js',
	},
	devServer:{
		inline:true,
		contentBase:'./public',
		port:3000
	},
	module: {
		loaders:[
			{test:/\.js$/,
			 exclude:/node_modules/,
			 loader:'babel'	
			},
			{test:/\.css$/, loader:ExtractTextPlugin.extract(['css']) },
			{test:/\.(sass|scss)$/, loader:ExtractTextPlugin.extract(['css','sass']) }
		]
	},
	plugins:[
		new ExtractTextPlugin("app.css")
	]

};