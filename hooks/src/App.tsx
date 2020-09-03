import React, { FunctionComponent, useRef, useCallback, FormEvent } from "react"

import InputRef from "./components/InputRef"
import Modal from "./components/Modal"

import { ModalHandles } from "./components/Modal"

const App: FunctionComponent = () => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef({ value: false })
  const modalRef = useRef<ModalHandles>(null)

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    nameInputRef.current?.focus()
    console.log(nameInputRef.current?.value)
    console.log(acceptTermsRef.current.value)
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <InputRef name="name" label="Nome completo" ref={nameInputRef} />

        <button onClick={handleAcceptTerms}>Aceitar termos</button>

        <button type="submit">Enviar</button>
      </form>

      <button onClick={handleOpenModal}>Abrir modal</button>

      <Modal ref={modalRef} />
    </div>
  )
}

export default App
