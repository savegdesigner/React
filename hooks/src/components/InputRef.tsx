import React, { InputHTMLAttributes, RefForwardingComponent, forwardRef } from "react"

interface InputRefProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const InputRef: RefForwardingComponent<HTMLInputElement, InputRefProps> = ({ name, label, ...rest }, ref) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <input name={name} type="text" {...rest} ref={ref} />
    </div>
  )
}

export default forwardRef(InputRef)
