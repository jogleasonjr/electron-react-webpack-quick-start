const path = require('path');

module.exports = {
    
    // This is the setting for electron.
    target: "electron",
    
    // This enables the creation of source maps,
    // which improve the debuggability of the application
    // by allowing you to see where an error was raised.
    devtool: "source-map",
    
    // Entry file to startsbuilding from.
    // entry.jsx is the renderer process,
    // main.js is for the main process.
    // Electron will be pointed at the main bundle,
    // while the Renderer will point to entry bundle.
    entry: {
        entry: "./app/renderer/entry.jsx",
        main: "./app/main/main.js"
    },
    
    // Location and filename pattern of the
    // final build output files.
    output: {
        path: path.join(__dirname, 'build'),
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    
    // Defines where we can load modules from,
    // and the extensions we care about. The ''
    // empty string allows the requiring of arbitrary
    // extensions, e.g. require('./somefile.ext').
    // Specifiying extensions such as '.js' allows
    // requiring without extensions,
    // e.g. require('underscore')
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    }
}