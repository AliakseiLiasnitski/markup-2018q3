const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.png$/,
                use: 'url-loader',
            }
        ]
    },
    mode: 'development',
}