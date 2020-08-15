import React, { Component } from "react"
import axios from "axios"

import Header from "../template/header"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

const url = "http://localhost:3003/api/todo"

export default class Todo extends Component {
  state = {
    description: "",
    list: [],
  }

  componentDidMount() {
    this.refresh()
  }

  handleChange = (event) => {
    this.setState({ ...this.state, description: event.target.value })
  }

  refresh = (description = "") => {
    const search = description ? `&description__regex=/${description}/` : ""

    axios.get(`${url}?sort=-createdAt${search}`).then((response) => {
      this.setState({ ...this.state, description, list: response.data.todos })
    })
  }

  handleAdd = () => {
    const description = this.state.description

    axios.post(url, { description }).then(() => this.refresh())
  }

  handleRemove = (todo) => {
    axios.delete(`${url}/${todo._id}`).then(() => {
      this.refresh(this.state.description)
    })
  }

  handleMarkAsDone = (todo) => {
    axios.put(`${url}/${todo._id}`, { ...todo, done: true }).then(() => this.refresh(this.state.description))
  }

  handleMarkAsPending = (todo) => {
    axios.put(`${url}/${todo._id}`, { ...todo, done: false }).then(() => this.refresh(this.state.description))
  }

  handleSearch = () => {
    this.refresh(this.state.description)
  }

  render() {
    return (
      <div className="container">
        <Header name="Tarefas" small="cadastro" />

        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />

        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    )
  }
}
