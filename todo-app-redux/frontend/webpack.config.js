const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true // Cannot GET request on html file
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test:  /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {loader: 'file-loader'}
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    }
}