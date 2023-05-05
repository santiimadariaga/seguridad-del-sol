import React, { useRef } from 'react'
import { CardBack, CardFront, CardProduct, ConsultButton, Name } from './cardsStyled'
import { useDispatch } from 'react-redux'
import * as CartActions from '../../../redux/cart/cart-actions'
import Modal from '../../Modal/Modal'

const Card = ({ item }) => {

  const dispatch = useDispatch()

  const { photo, name, title, descr } = item

  const cardRef = useRef()

  const handlerModal = (e) => {
    e.preventDefault();
    dispatch(CartActions.addToCart(item))

    const modal = cardRef.current.lastChild;
    modal.style.display = "flex";
    modal.style.transition = "all 0.5s ease";

    setTimeout(() => {
      modal.style.display = "none";
    }, 1000);

    };

  return (
    <CardProduct ref={cardRef}>

        <CardFront photo={photo} className='cardFront' >
          <Name>{name}</Name>
        </CardFront>

        <CardBack className='cardBack' >
          <h2 style={{textTransform: "uppercase"}} >{title}</h2>
          <p style={{textAlign: "left"}} >{descr}</p>
          <ConsultButton onClick={handlerModal}>Agregar al carrito</ConsultButton>
        </CardBack>

        <Modal message="Producto añadido al carrito" />

    </CardProduct>
  )
}

export default Card