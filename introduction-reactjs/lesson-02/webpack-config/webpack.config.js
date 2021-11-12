const path = require('path');
//2-Após a instalaçao do plugin para html importar no projeto
//2.1- adcionado pligin abaixo
const HtmlWebPackPlugin = require("html-webpack-plugin");
//3-adcionar  devtool: 'source-map' que facilita a identificação de erros
//1-Inicialização // entry - ponto de entrada //pegando diretório raiz(__dirname)
module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundler.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};


