
var path = require('path');

module.exports = {
    entry:
        ["./src/global.js", "./src/app.js"]
    ,
    output: {
        filename: "./build/bundle.js"
    },
    watch: true,
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
                    plugins: ['transform-runtime']
                    //,
                    //presets: ['es2015', 'stage-0', 'react'],
                }
            }
        ]
    }
}


