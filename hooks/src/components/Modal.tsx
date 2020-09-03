import React, { useState, useCallback, forwardRef, useImperativeHandle } from "react"

export interface ModalHandles {
  openModal: () => void
}

const Modal: React.RefForwardingComponent<ModalHandles> = ({}, ref) => {
  const [visible, setVisible] = useState(true)

  useImperativeHandle(ref, () => {
    return {
      openModal,
    }
  })

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const handleModal = useCallback(() => {
    setVisible(false)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div>
      <span>Modal aberto!</span>

      <button onClick={handleModal}>Fechar modal</button>
    </div>
  )
}

export default forwardRef(Modal)
