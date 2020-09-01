import React, { useImperativeHandle, forwardRef } from "react"
import { RefForwardingComponent } from "react"

interface FormProps {
  initialData?: string
}

export interface FormRef {
  submit(): void
}

const Form: RefForwardingComponent<FormRef, FormProps> = (props, ref) => {
  const submit = () => {
    alert("Submit!")
  }

  useImperativeHandle(ref, () => ({
    submit,
  }))

  return (
    <form action="">
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  )
}

export default forwardRef(Form)
