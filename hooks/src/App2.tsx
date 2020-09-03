import React, { FunctionComponent } from "react"

import Form from "./components/Form"
import Input from "./components/Input"

const App: FunctionComponent = () => {
  return (
    <div>
      <h1>Hello Hooks!</h1>
      <Form>
        <Input type="text" name="name" />
        <Input type="text" name="email" />
        <Input type="text" name="password" />
        <button>Enviar</button>
      </Form>
    </div>
  )
}

export default App
