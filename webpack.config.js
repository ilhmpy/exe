const path = require("path");
const ExtractTextPlugin =  require("extract-text-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
const minify = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./scripts/main.js",
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "./js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(s*)css$/,
        use: [
          MiniCss.loader,
          "css-loader?url=false",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCss({
      filename: "./css/bundle.css"
    })
  ],
  optimization: {
	  minimizer: [
		  new minify({})
	 ],
  },
}
