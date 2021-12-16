import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
// import helmet from 'helmet'
import path from 'path'

// Adding a security later to the environment variables
dotenv.config()

const PORT = process.env.PORT || 3001


// Express App Object.
const app: Application = express()

//Make static files visible dir for express.
app.use('/images', express.static(path.join(__dirname, 'images')))


// HTTP request logger middleware
// short: Shorter than default, also including response time.
app.use(morgan('short'))


// // HTTP security middleware
// app.use(helme())


// Root endpoint
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'This is the root endpoint in json format' })
})


// Start the backend server.
app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`)
})

export default app
