const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'), // 切到 src 目錄下
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname, 'App'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use:  ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]?[hash]'
                }  
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};