import React, { FunctionComponent, useState, useEffect } from "react"
import { useRef } from "react"

interface User {
  name: string
  login: string
  avatar_url: string
}

const UseRefComponent: FunctionComponent = () => {
  const [users, setUsers] = useState<[User]>()
  const inputRef = useRef<HTMLInputElement>(null)

  inputRef.current?.focus()

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  )
}

export default UseRefComponent
