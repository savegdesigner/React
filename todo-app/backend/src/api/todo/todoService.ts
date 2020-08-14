import { Todo } from './todo'
import { Request, Response } from 'express'

export const TodoService = {

    async get(request: Request, response: Response) {

        let todos = await Todo.find()

        return response.status(200).json({ todos })

    },

    async create(request: Request, response: Response) {
        
        let todo = request.body

        const newTodo = await Todo.create(todo)

        return response.status(201).json(newTodo)

    },

    async update(request: Request, response: Response) {
        
        let todoId = request.params.id
        let todoToUpdate = request.body

        let options = { new: true, runValidators: true }

        let todoUpdated = await Todo.findByIdAndUpdate(
            todoId,
            todoToUpdate,
            options
        )

        return response.status(200).json(todoUpdated)

    },

    async delete(request: Request, response: Response) {
       
        let todoId = request.params.id

        await Todo.findByIdAndDelete(todoId)

        return response.status(200).send({
            message: "Todo deleted."
        })

    }

}