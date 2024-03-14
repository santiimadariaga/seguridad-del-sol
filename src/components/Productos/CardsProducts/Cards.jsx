import React, { useEffect, useState } from 'react'
// import { Button, ContainerBtn } from './cardsStyled';
import {  ContentCards } from './cardsStyled';
import Card from './Card';
import { useSelector } from 'react-redux';
import { products } from '../../../data/data'

const CardsProducts = () => {

  const INITIAL_LIMIT = 6;

  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );
  
  // const totalProducts = products.length

  const productsFiltered = products.filter(product => product.category === selectedCategory);

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      <ContentCards>
        { 
        !selectedCategory ?
          products.map((item, index) => {
          if (limit > index) {
            return (
              <Card item={item} key={index} { ...item } />
            )
            } else {
              return null
            }
            })
          : productsFiltered
          .map((item, index) => {
            if (limit > index) {
              return (
                <Card item={item} key={index} { ...item } />
              )
              } else {
                return null
              }
              })
        }
      </ContentCards>
{/* 
      { !selectedCategory && 
      <ContainerBtns>
        <Button
          onClick={ () => {setLimit(limit - INITIAL_LIMIT)} }
          disabled={ INITIAL_LIMIT === limit }
          >VER MENOS</Button>
        <Button
          onClick={() => setLimit(limit + INITIAL_LIMIT)}
          disabled={ totalProducts <= limit }
          >VER MÁS</Button>
      </ContainerBtns>
        } */}
    </>

  )
}

export default CardsProducts