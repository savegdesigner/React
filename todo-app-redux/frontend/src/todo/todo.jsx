import React, { Component } from "react"

import Header from "../template/header"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

export default class Todo extends Component {
  state = {
    description: "",
    list: [],
  }

  render() {
    return (
      <div className="container">
        <Header name="Tarefas" small="cadastro" />

        <TodoForm />

        <TodoList />
      </div>
    )
  }
}
