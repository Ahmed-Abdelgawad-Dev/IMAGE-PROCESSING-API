import { Request, Response, NextFunction } from 'express'
import { ValidationError, validationResult, query } from 'express-validator'
import { MYImages } from '../constants/index'

// query([fields, message])
// https://express-validator.github.io/docs/check-api.html#queryfields-message
const sizeValidator = () => [
    // Width
    query('width')
        .exists()
        .toInt()
        .isInt({ max: 1200 })
        .withMessage('Required with maximum 1200'),
    // height
    query('height')
        .exists()
        .toInt()
        .isInt({ max: 1200 })
        .withMessage('Required with maximum 1200'),
    // Filename
    query('filename')
        .exists()
        .isIn(MYImages)
        .withMessage('Image name is a must'),
]

// Previewing validation Function
const displayValidator = () => [
    query('filename')
        .exists()
        .isIn(MYImages)
        .withMessage('Required image name'),
]

const validatingMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    const err = ({ msg, param }: ValidationError) => `[${param}]: ${msg}`
    const errors = validationResult(request).formatWith(err)
    // Check for errors
    if (errors.isEmpty()) {
        return next()
    }
    // 422 Unprocessable Entity
    return response.status(422).json({
        status: 'error',
        errors: errors.array({ onlyFirstError: true }),
    })
}

export { validatingMiddleware, sizeValidator, displayValidator }
