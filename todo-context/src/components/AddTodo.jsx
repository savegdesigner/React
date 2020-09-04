import React, { useContext, useState } from "react"
import { TodoContext } from "../contexts/TodoContext"

const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext)

  const [todo, setTodo] = useState()

  const handleFormSubmit = (event) => {
    event.preventDefault()

    saveTodo(todo)
  }

  const HandleInputChange = (event) => {
    setTodo({ ...todo, title: event.target.value })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="title" placeholder="Nova tarefa..." onChange={HandleInputChange} />
      <button>Adicionar</button>
    </form>
  )
}

export default AddTodo
