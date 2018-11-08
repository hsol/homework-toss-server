import pathConst from '../Constants/path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default () => {
   return {
      entry: {

      },
      resolve: {
         extensions: ['.css', '.scss', '.sass'],
         modules: [
            './assets'
         ]
      },
      module: {
         rules: [
            {
               test: /\.(c|sc|sa)ss$/,
               exclude: '/node_modules/',
               use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                     'css-loader',
                     'sass-loader'
                  ]
               })
            },
            {test: /\.(png|jpg|woff|woff2|eot|ttf|otf|svg)/, loader: 'url-loader'},
         ]
      },
      plugins: [
         new ExtractTextPlugin({
            filename: 'styles/[name].css',
            allChunks: true
         }),
         new CopyWebpackPlugin([
            {
               from: pathConst.assets,
               to: pathConst.dist,
            }
         ])
      ]
   }
}