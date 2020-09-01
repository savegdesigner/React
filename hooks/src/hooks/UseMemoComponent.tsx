import React, { FunctionComponent, useState, useEffect } from "react"
import { useMemo } from "react"
import { useCallback } from "react"

interface User {
  name: string
  login: string
  avatar_url: string
}

const UseMemoComponent: FunctionComponent = () => {
  const [users, setUsers] = useState<[User]>()

  const names = useMemo(() => users?.map((user) => user.name).join(", ") || "", [users])

  const greeting = useCallback((user: User) => alert(`Olá ${user.name}`), [])

  return <div></div>
}

export default UseMemoComponent
