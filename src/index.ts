import express, { Application, Request, Response } from 'express'
import path from 'path'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import httpErrorMiddleware from './middleware/errorMiddleware'
import routes from './routes'

// Adding a security later to the environment variables
dotenv.config()
const PORT = process.env.PORT || 3001 || 3002 || 3003
// const PORT = 3000

// Express App Object.
const app: Application = express()

// Make static files visible dir for express.
app.use('/images', express.static(path.join(__dirname, 'images')))
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

// HTTP request logger middleware
// short: Shorter than default, also including response time.
app.use(morgan('short'))

// HTTP security middleware
// https://www.npmjs.com/package/helmet
app.use(helmet())

// Middleware error handler
app.use(httpErrorMiddleware)

// Adding api endpoint
app.use('/api', routes)

// Root endpoint
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'This is the root endpoint in json format' })
})

// Start the backend server.
app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`)
})

export default app
