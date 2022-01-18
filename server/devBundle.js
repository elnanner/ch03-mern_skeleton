import config from './../config/config'
import webpack from 'webpack'
import webpackMidleware from 'webpack-dev-middleware'
import webpackHotMidleware from 'webpack-hot-middleware'
import webpackConfig from './../webpack.config.client'

const compile = (app) => {
    if (config.env === "development") {
        const compiler = webpack(webpackConfig)
        const middleware = webpackMidleware(compiler, {
            publicPath=webpackConfig.output.publicPath
        })
        app.use(middleware)
        app.use(webpackHotMidleware(compiler))
    }
}

export default { compile }