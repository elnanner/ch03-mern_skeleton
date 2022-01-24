import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import devBundle from './devBundle'
import path from 'path'
import React from 'react';
import ReactDomServer from 'react-dom/server'
import StaticRouter from 'react-router/StaticRouter'
import MainRouter from './../client/MainRouter'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import theme from './../client/theme'

const CURRENT_WORKING_DIR = process.cwd()

const app = express()
devBundle.compile(app)

/*... configure express middlewares here ...*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// serving static files
app.use('dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)

// error handling for auth
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            'error': err.name + ': ' + err.message
        })
    } else if (err) {
        res.status(400).json({
            'error': err.name + ': ' + err.message
        })
        console.log(err)
    }
})

app.get('*', (req, res) => {
    // 1. Generate CSS styles using Material-UI's ServerStyleSheets
    const sheets = new ServerStyleSheets()
    const context = {}
    const markup = ReactDomServer.renderToString(sheets.collect(
        <StaticRouter location={req.url} context={context}>
            <ThemeProvider theme={theme}>
                <MainRouter />
            </ThemeProvider>
        </StaticRouter>
    ))

    // 2. Use renderToString to generate markup which renders components specific to the route requested
    if (context.url) {
        return res.redirect(303, context.url)
    }
    const css = sheets.toString()

    // 3. Return template with markup and CSS styles in the response
    res.status(200).send(Template({
        markup: markup,
        css: css
    }))

})

app.get('/', (req, res) => {
    res.status(200).send(Template())
})

export default app