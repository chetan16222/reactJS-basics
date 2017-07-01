var webpack = require("webpack");
var path = require("path"); // node js library that gloabally avilable

var DIST_DIR = path.resolve(__dirname,"dist");  // actually serve my app 
var SRC_DIR = path.resolve(__dirname,"src");  // src file path dir

//webpack config

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath : "/app/"  
    },
    module : {
        loaders : [
            {
                test: "/\.js?/",
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react","es2015","stage-2"]
                }
            }
        ]
    }
};

module.exports = config;