import React, { FunctionComponent, useContext, useRef, useEffect } from "react"

interface InputProps {
  type: string
  name: string
}

const Input: FunctionComponent<InputProps> = ({ type, name }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return <input type={type} name={name} ref={inputRef} />
}

export default Input
