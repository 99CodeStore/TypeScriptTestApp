const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode:'none',
    entry: {
        index: './src/ts/index.ts',
        validation: './src/ts/validations.ts',
        site: './src/ts/site.ts',
        apexgrid:'./src/ts/apexgridHelper.ts'
    },
    output: {
        filename: '[name].entry.js',
        path: path.resolve(__dirname, '..', 'wwwroot', 'dist'),
        clean: true
    },
	resolve: {
         extensions: [".ts", ".js"],
         extensionAlias: {'.js': ['.js', '.ts']}
     },
    devtool: 'source-map',
   
    module: {
        rules: [
		{
                 test: /\.ts$/i,
                 use: ['ts-loader'],
                 exclude: /node_modules/
             },
            {
                test: /\.s?css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i, 
                type: 'asset'
            },
            {
                test: /\.(eot|woff(2)?|ttf|otf|svg)$/i,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};