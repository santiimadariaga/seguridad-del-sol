import React from 'react'
import Input from './InputProducts/Input'
import { InputContainer, ProductsContainer } from './productosStyled'
import SelectMUI from './Select/selectMUI'
import CardsProducts from './CardsProducts/Cards'
import { TitleHero } from '../Hero/heroStyled'

const Productos = () => {

  return (
    <ProductsContainer id='venta'>
      <InputContainer>
        <Input />
        <SelectMUI />
      </InputContainer>

      <TitleHero style={{padding: "30px 0"}} >
        Nuestros productos!
      </TitleHero>

      <CardsProducts />

    </ProductsContainer>
  )
}

export default Productos