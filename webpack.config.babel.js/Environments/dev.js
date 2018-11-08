import {HotModuleReplacementPlugin} from 'webpack'
import pathConst from "../Constants/path";

export default {
    plugins: [
        new HotModuleReplacementPlugin()
    ],
    devServer: {
        index: 'index.html',
        watchContentBase: true,
        contentBase: pathConst.dist,
        watchOptions: {
            poll: true
        },
        port: 80,
        historyApiFallback: true,
        hot: true,
        overlay: true,
        open: true,
        inline: true
    }
}