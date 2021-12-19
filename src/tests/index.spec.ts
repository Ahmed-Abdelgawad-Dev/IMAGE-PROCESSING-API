import supertest from 'supertest' // Third party for testing endpoint
import app from '../index'
import imageExists from '../utils/imageExists'
import fs from 'fs'
import {IMAGES_OUTPUT_PATH} from '../constants'

// create a request object to test the endpoint
const request = supertest(app)


// Endpoint tests.
describe("Testing endpoints:", () => {
    
    it('Root endpoints 200 response.', async () => {
        const resp = await request.get('/')
        expect(resp.status).toBe(200)
    })

    it('Resizing endpoint works.', async () => {
        const resp = await request.get('/api/images/resize_image/?width=500&height=500&filename=pic1')
        expect(resp.status).toBe(200)
    })

    it('Cached image functionality works.', async () => {
        const resp = await request.get('/api/images/resize_image/?width=200&height=200&filename=pic2')
        expect(fs.existsSync(`${IMAGES_OUTPUT_PATH}/pic2_200_200.jpg`)).toBeTruthy()
      })


    it('Displaying pics endpoint.', async () => {
        const resp = await request.get('/api/images/display/?filename=pic2')
        expect(resp.status).toBe(200)
    })

    
})



// Image tests.
describe('Testing Processing Image Functionalities:', ()=> {
    it('pic1_200_200.jpg: does not match the original.', ()=>{
        expect(imageExists(200, 200, 'pic1') instanceof Promise).toBe(true)
    })

    it('imageExists func is ok.', ()=> {
        expect(imageExists).toBeDefined()
    })

    it('Testing image does not exist.', () => {
        expect(fs.existsSync(`${IMAGES_OUTPUT_PATH}/pic2_333_333.jpg`)).toBeFalsy()
      })
})