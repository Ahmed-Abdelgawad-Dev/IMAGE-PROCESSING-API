import express from 'express'
import routesOfImages from './api/images'

const routes = express.Router()

routes.use('/images', routesOfImages)

export default routes
