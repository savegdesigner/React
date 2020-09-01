import express from 'express'
import { TodoService } from '../api/todo/todoService'

const routes = express.Router()

routes.get('/todo', TodoService.get)
routes.post('/todo', TodoService.create)
routes.put('/todo/:id', TodoService.update)
routes.delete('/todo/:id', TodoService.delete)

export default routes