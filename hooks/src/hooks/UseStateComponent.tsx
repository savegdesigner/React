import React, { FunctionComponent, useState, useEffect } from "react"

interface User {
  name: string
  login: string
  avatar_url: string
}

const UseStateComponent: FunctionComponent = () => {
  const [user, setUser] = useState<User>()

  async function loadData() {
    const response = await fetch("https://api.github.com/users/vinisaveg")

    const data = await response.json()

    setUser(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      {/* {user && user.name} */}
      {user?.name} - {user?.login}
    </div>
  )
}

export default UseStateComponent
