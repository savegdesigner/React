import React from "react"
import IconButton from "../template/iconButton"
import "../template/custom.scss"

import { bindActionCreators } from "redux"
import { markAsDone, markAsPending, remove } from "./todo.action"

import { connect } from "react-redux"

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || []

    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "done" : ""}>{todo.description}</td>
        <td>
          <IconButton name="Concluido" style="btn-success" onClick={() => props.markAsDone(todo)} />
        </td>

        <td>
          <IconButton name="Inconcluido" style="btn-warning" onClick={() => props.markAsPending(todo)} />
        </td>

        <td>
          <IconButton name="Remover" style="btn-danger" onClick={() => props.remove(todo)} />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>{renderRows()}</tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({
  list: state.todo.list,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      markAsDone,
      markAsPending,
      remove,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
