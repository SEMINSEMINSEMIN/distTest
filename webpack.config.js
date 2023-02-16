const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        publicPath: "", 
        filename: "main.js",
        path: path.resolve(__dirname, "dist/js/"),
    },
    devServer: {
        static: "./dist", // This tells webpack-dev-server to serve the files from the dist directory on localhost:3000.
        client: {
            overlay: true
        },
        port: 3000,
        open: true,
        devMiddleware: { writeToDisk: true }
    },
    watchOptions: {
        poll: true,
        ignored: "/node_modules/"
    }
};
