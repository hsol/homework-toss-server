import {HotModuleReplacementPlugin} from 'webpack'
import pathConst from "../Constants/path";

export default {
    plugins: [
        new HotModuleReplacementPlugin()
    ],
    devServer: {
        compress: true,
        publicPath: '/',
        host: 'localhost',
        port: 8000,
        proxy: {
            "**": "http://localhost:8080"
        },
        watchContentBase: true,
        contentBase: pathConst.dist,
        watchOptions: {
            poll: true
        },
        historyApiFallback: true,
        hot: true,
        overlay: true,
        open: true,
        inline: true
    }
}