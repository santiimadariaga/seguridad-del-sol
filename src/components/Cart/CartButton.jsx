import React, { useRef, useState } from 'react'
import { ContainerCartImg, CartIconSyled, LiStyled, Overlay } from './CartBtnStyled'
import { AnchorMenu } from '../NavBar/Menu/menuStyled'
import Cart from './Cart'

const CartBtn = () => {

  const cartRef = useRef()

  const [isOpen, setIsOpen] = useState(false)
  const handlerOpenCart = (e) => {
    e.preventDefault()

    if( isOpen === false ) {
      cartRef.current.style.display = "flex"
      cartRef.current.style.right = "0"
      setIsOpen(true)
    } else if ( isOpen === true ) {
      cartRef.current.style.display = "none"
      cartRef.current.style.right = "-100%"
      setIsOpen(false)
    }
  }
  return (
    <>
        <ContainerCartImg
        onClick={handlerOpenCart}
        >
          <CartIconSyled />
        </ContainerCartImg>

        <LiStyled
          onClick={handlerOpenCart}
        >
          <AnchorMenu
            href={""}
            >Carrito
          </AnchorMenu>
        </LiStyled>

        <Cart handlerOpenCart={handlerOpenCart} cartRef={cartRef} />
        { isOpen ?
          <Overlay onClick={handlerOpenCart} />
          : null
        }

      </>
  )
}

export default CartBtn