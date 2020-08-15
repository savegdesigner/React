import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import IconButton from "../template/iconButton"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { changeDescription, search } from "./todo.action"

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    if (e.key === "Enter") {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (e.key === "Escape") {
      this.props.handleClear()
    }
  }

  render() {
    return (
      <Form inline className="container-fluid">
        <Form.Label htmlFor="input" srOnly>
          Tarefa
        </Form.Label>

        <Form.Control
          onChange={this.props.changeDescription}
          onKeyUp={this.keyHandler}
          value={this.props.description}
          className="mb-2 mr-sm-2"
          id="input"
          placeholder="Tarefa"
        />

        <IconButton style="btn-primary" name="Adicionar" onClick={this.props.handleAdd} />
        <IconButton style="btn-secundary" name="Search" onClick={this.props.search} />
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  description: state.todo.description,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeDescription,
      search,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
