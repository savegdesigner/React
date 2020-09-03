import React, { FunctionComponent, useRef, useCallback, FormEvent } from "react"

import InputRef from "./components/InputRef"

const App: FunctionComponent = () => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef({ value: false })

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    nameInputRef.current?.focus()
    console.log(nameInputRef.current?.value)
    console.log(acceptTermsRef.current.value)
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <InputRef name="name" label="Nome completo" ref={nameInputRef} />

        <button onClick={handleAcceptTerms}>Aceitar termos</button>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
