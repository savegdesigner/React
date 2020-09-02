import React, { FunctionComponent, useState } from "react"

const Form: FunctionComponent = ({ children }) => {
  const [inputs, setInputs] = useState<any>([])

  function registerField(name: any, ref: any) {
    setInputs([...inputs, { name, ref }])
  }

  return <form>{children}</form>
}

export default Form
