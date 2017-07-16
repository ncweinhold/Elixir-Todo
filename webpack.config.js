var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function join(dest) {
    return path.resolve(__dirname, dest);
}

function web(dest) {
    return join('web/static/' + dest);
}

module.exports = {
    entry: {
	application: [
	    web('js/index.js')
	],
    },

    output: {
	path: join('priv/static'),
	filename: 'js/index.js',
    },

    module: {
	loaders: [
	    {
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		query: {
		    cacheDirectory: true,
		    plugins: ['transform-decorators-legacy'],
		    presets: ['react', 'es2015', 'stage-2', 'stage-0'],
		},
	    },
	]
    }
};
