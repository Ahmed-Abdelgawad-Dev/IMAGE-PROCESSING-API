// https://www.npmjs.com/package/fs-extra
// fs-extra adds file system methods that aren't included in the native fs module
// Adds promise support to the fs methods
import fs from 'fs-extra'
import { IMAGES_OUTPUT_PATH } from '../constants/index'

const imageExists = async (width: number, height: number, filename: string): Promise<boolean> => {
    const pathToImage = `${IMAGES_OUTPUT_PATH}/${filename}_${width}_${height}.jpg`
    try {
        // https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/ensureFile.md
        // Create the file if not exist after checking it.
        await fs.ensureDir(IMAGES_OUTPUT_PATH)
        const newImageExists: boolean = await fs.pathExists(pathToImage)
        return newImageExists
    } catch (error) {
        throw new Error('File does not exist')
    }
}

export default imageExists