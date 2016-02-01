var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/main.jsx"),
    output: {
        path: __dirname + "/assets",
        publicPath: "/",
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js[x]?$/, include: path.resolve(__dirname, "src"), exclude: /node_modules/, loader: "babel" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { 
                warnings: false 
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};