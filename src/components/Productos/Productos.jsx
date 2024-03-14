import React from 'react'
import { ProductsContainer } from './productosStyled'
import CardsProducts from './CardsProducts/Cards'

const Productos = () => {

  return (
    <ProductsContainer id='venta'>
      <CardsProducts />
    </ProductsContainer>
  )
}

export default Productos