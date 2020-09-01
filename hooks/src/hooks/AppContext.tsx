import React, { FunctionComponent, useContext } from "react"
import CartContext from "./CartContext"

const AppContext: FunctionComponent = () => {
  const context = useContext(CartContext)

  return (
    <ul>
      {context.products?.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}

export default AppContext
