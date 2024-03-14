import React, { useRef } from 'react'
import { CardBack, CardFront, CardProduct, ConsultButton, Name } from './cardsStyled'

const Card = ({ item }) => {

  const { photo, title, descr } = item
  const nameItem = item.name

  const cardRef = useRef()

  const handlerInfo = (e, nameItem) => {
    e.preventDefault();

    window.open(`https://wa.me/5491121724526?text=Hola,%20te%20consulto%20sobre%20los%20${nameItem}`, "_blank")

    };

  return (
    <CardProduct ref={cardRef}>

      <CardFront photo={photo} className='cardFront' >
        <Name>{nameItem}</Name>
      </CardFront>

      <CardBack className='cardBack' >
        <h2 style={{textTransform: "uppercase"}} >{title}</h2>
        <p style={{textAlign: "left", fontWeight: '500'}} >{descr}</p>
        <ConsultButton onClick={(e) => handlerInfo(e, nameItem) }>Enviar mensaje</ConsultButton>
      </CardBack>

    </CardProduct>
  )
}

export default Card