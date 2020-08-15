import React from "react"
import IconButton from "../template/iconButton"
import "../template/custom.scss"

import { connect } from "react-redux"

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || []

    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "done" : ""}>{todo.description}</td>
        <td>
          <IconButton name="Concluido" style="btn-success" onClick={() => props.handleMarkAsDone(todo)} />
        </td>

        <td>
          <IconButton name="Inconcluido" style="btn-warning" onClick={() => props.handleMarkAsPending(todo)} />
        </td>

        <td>
          <IconButton name="Remover" style="btn-danger" onClick={() => props.handleRemove(todo)} />
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

export default connect(mapStateToProps)(TodoList)
