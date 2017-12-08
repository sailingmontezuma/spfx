
var path = require('path');

module.exports = {
    entry:
        {global:"./src/global.js", app: "./src/app.js"}
    ,
    output: {
        filename: "./build/bundle[name].js"
    },
    watch: false,
    module: {
        loaders: [
            {
                loader: "babel-loader",
                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src"),
                ],
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,
                // Options to configure babel with
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime']
                    //,
                    //presets: ['es2015', 'stage-0', 'react'],
                }
            }
        ]
    },
    
}


