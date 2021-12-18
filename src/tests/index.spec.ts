import supertest from 'supertest' // Third party for testing endpoint
import app from '../index'

// create a request object to test the endpoint
const request = supertest(app)

describe('Testing endpoint\'s response', () => {
    it('Test endpoint root.', async () => {
        const resp = await request.get('/')
        expect(resp.status).toBe(200)
    })
})
