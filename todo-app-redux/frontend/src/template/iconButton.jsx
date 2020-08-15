import React from "react"
import Button from "react-bootstrap/Button"

export default (props) => {
  let style = "mb-2 mr-2 "
  style += props.style

  if (props.hide) {
    return null
  } else {
    return (
      <Button className={style} onClick={props.onClick}>
        {props.name}
      </Button>
    )
  }
}
