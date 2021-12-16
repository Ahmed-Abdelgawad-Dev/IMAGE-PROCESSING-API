import { Request, Response, NextFunction } from 'express'
// Extended Error class used here as a middleware error.
import HttpError from '../utils/httpError'

const httpErrorMiddleware = (error: HttpError, request: Request, response: Response, next: NextFunction) => {
    // Error code if not 500 server error.
    const status = error.status || 500
    // Error message otherwise a custom error.
    const message = error.message || 'Sorry, something went wrong'
    response.status(status).json({ status, message })
}

export default httpErrorMiddleware