import React, { Component } from 'react'
import Header from '../template/header'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    state = {
        description: '',
        list: []
    }

    handleAdd = () => {
        console.log(this.state.description)
    }

    handleChange = (event) => {
        this.setState({ ...this.state, description: event.target.value })
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

                <TodoList />
            </div>
        )

    }
}