import sharp from 'sharp'
import { IMAGES_PATH, IMAGES_OUTPUT_PATH } from '../constants/index'

// Recommended Async / await implementation.
const ResizeImg = async (
    width: number,
    height: number,
    filename: string,
): Promise<void> => {
    const currentImagePath = `${IMAGES_PATH}/${filename}.jpg`
    const newImagePath = `${IMAGES_OUTPUT_PATH}/${filename}_${width}_${height}.jpg`
    try {
        // https://www.npmjs.com/package/sharp
        await sharp(currentImagePath)
            // Using NUmber to assure the value is an integer
            .resize(Number(width), Number(height))
            .toFile(newImagePath)
    } catch (error) {
        throw new Error('Sorry we can not resize your image!')
    }
}

export default ResizeImg
