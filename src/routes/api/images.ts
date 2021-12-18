import { Router, Request, Response } from 'express'
import { validatingMiddleware, sizeValidator, displayValidator } from '../../middleware/validateMiddleware'
import ResizeImg from '../../controllers'
import imageExists from '../../utils/imageExists'


const routes = Router()

routes.get('/resize', sizeValidator(), validatingMiddleware, async (request: Request, response: Response) => {
    // Get height value as an integer  
    const height: number = parseInt(request.query.height as string, 10) //radix must be 10 for having right readable image values
    // Get width as an integer
    const width: number = parseInt(request.query.width as string, 10) // same radix too
    // Get filename
    const filename: string = (request.query.filename as string)
    try {
        // Is the image exists?
        const imageExistFunc = await imageExists(width, height, filename)
        // If not?
        if (!imageExistFunc) {
            // Resize the target image and save it
            await ResizeImg(width, height, filename)
        }
        response.render('resize', { width, height, new_images: `${filename}_${width}_${height}.jpg` })
    } catch (error) {
        throw new Error(`Error: Sorry can not resize the image}`)
        console.log(error)
    }
})


routes.get('/preview', displayValidator(), validatingMiddleware, async (request: Request, response: Response) => {
    // Obtaining the filename of the query
    const targetFilename: string = (request.query.filename as string)
    try {
        response.render('index', { new_images: `${targetFilename}.jpg` })
    } catch (error) {
        throw new Error('Error: Something went wrong!!! ')
    }
})

export default routes