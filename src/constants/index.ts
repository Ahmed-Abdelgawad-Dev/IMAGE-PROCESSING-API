import path from 'path'

// My existing pics
const MYImages: string[] = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5']

// Path to the images
const IMAGES_PATH: string = path.resolve(__dirname, '../images')
// Path to the output resized images
const IMAGES_OUTPUT_PATH: string = path.resolve(
    __dirname,
    '../images/new_images',
)

export { MYImages, IMAGES_PATH, IMAGES_OUTPUT_PATH }
