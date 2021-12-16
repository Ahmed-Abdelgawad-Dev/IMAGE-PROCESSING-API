import sharp from 'sharp'
import { MYImages, IMAGES_PATH, IMAGES_OUTPUT_PATH } from '../imagConstants/index'


// Recommended Async / await implementation.
const ResizeImg = async (width: number, height: number, filename: string): Promise<void> => {
    const currentImagePath = `${IMAGES_PATH}/${filename}.jpg`
    const outputImagePath = `${IMAGES_OUTPUT_PATH}/${filename}_${width}_${height}.jpg`
    try {
        // https://www.npmjs.com/package/sharp
        await sharp(currentImagePath).resize(Number(width), Number(height)).toFile(outputImagePath)
    } catch (error) {
        throw new Error('Sorry we can not resize your image!')
    }
}





export default ResizeImg