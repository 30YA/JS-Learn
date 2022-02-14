const path = require('path');

module.exports = {
    entry: './src/JS/script.js',
    output: {
        path: path.resolve(__dirname, './public/JS'),
        filename: 'bundle.js'
    }
}