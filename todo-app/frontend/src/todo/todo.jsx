import React, { Component } from 'react'
import axios from 'axios'

import Header from '../template/header'
import TodoForm from './todoForm'
import TodoList from './todoList'

const url = 'http://localhost:3003/api/todo'

export default class Todo extends Component {

    state = {
        description: '',
        list: []
    }

    componentDidMount() {
        this.refresh()
    }

    handleChange = (event) => {
        this.setState({ ...this.state, description: event.target.value })
    }

    refresh = () => {
        axios.get(`${url}?sort=-createdAt`)
            .then(response => {
                this.setState(
                    { ...this.state, description: '', list: response.data.todos}
                )
            })
    }

    handleAdd = () => {
        const description = this.state.description

        axios.post(url, { description })
            .then(() => this.refresh())
    }

    handleRemove = (todo) => {
        axios.delete(`${url}/${todo._id}`)
            .then(() => {
                this.refresh()
            })
    }

    handleMarkAsDone = (todo) => {
        axios.put(`${url}/${todo._id}`, { ...todo, done: true})
            .then(() => this.refresh())
    }

    handleMarkAsPending = (todo) => {
        axios.put(`${url}/${todo._id}`, {...todo, done: false})
            .then(() => this.refresh())
    }

    render() {

        return (
            <div className="container">
                <Header name="Tarefas" small="cadastro"/>

                <TodoForm 
                    description={this.state.description} 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
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