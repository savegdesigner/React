import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import IconButton from "../template/iconButton"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { changeDescription, search, add, clear } from "./todo.action"

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { add, search, description, clear } = this.props

    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description)
    } else if (e.key === "Escape") {
      clear()
    }
  }

  render() {
    const { add, search, description, clear } = this.props

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

        <IconButton style="btn-primary" name="Adicionar" onClick={() => add(description)} />
        <IconButton style="btn-secundary" name="Search" onClick={search} />
        <IconButton style="btn-warning" name="Clear" onClick={() => clear()} />
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
      add,
      clear,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
