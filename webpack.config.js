module.exports = {
  entry: __dirname + '/client/src/index.js',
  module: {
    rules: [
      { 
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};