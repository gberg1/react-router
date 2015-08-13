module.exports = {
  entry: {
    app: './app/router.js'
  },
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx-loader', 'babel'], sourceMap: true }

    ]
  }, 
  devtool: 'source-map'
}
