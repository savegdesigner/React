import React, { useImperativeHandle, useRef, FunctionComponent } from "react"

import Form, { FormRef } from "./Form"

const UseImperativeHandleComponent: FunctionComponent = () => {
  const formRef = useRef<FormRef>(null)

  const handleSubmit = () => {
    formRef.current?.submit()
  }

  return <Form ref={formRef} />
}

export default UseImperativeHandleComponent
