const path = require('path') //CommonJs规范

const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html'
});

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const vuePlugin = new VueLoaderPlugin()

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname,'./src/js/main.js'),//入口
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
	},
	plugins: [htmlPlugin,vuePlugin],
	module:{
		rules:[
			{
				test:/\.css$/,
				//use是数组，先写css再写style，从右往左加载
				use:['style-loader','css-loader']
			},
			{
				test:/\.(png|jpg|gif|jpeg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:31000
						}
					},
					'file-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use:[
					{
						loader: 'babel-loader',
						options: {
							presets:['@babel/preset-env']
						}
					}
				]
			},
			{
				test:/\.vue$/,//$以.vue结尾
				use:'vue-loader'
			}
		]
	}
};