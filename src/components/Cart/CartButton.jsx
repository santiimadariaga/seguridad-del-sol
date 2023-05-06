import React, { useRef, useState } from 'react'
import { ContainerCartImg, CartIconSyled, LiStyled, Overlay, Bubble } from './CartBtnStyled'
import { AnchorMenu } from '../NavBar/Menu/menuStyled'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const CartBtn = () => {

  const cartRef = useRef()

  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector(state => state.cart.cartList)
  .reduce((acc, item) => (acc += item.quantity), 0);

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
          {
            cartItems ?
            <Bubble>{cartItems}</Bubble>
            : null
          }
          <CartIconSyled />
        </ContainerCartImg>

        <LiStyled
          onClick={handlerOpenCart}
        >
          {
            cartItems ?
            <Bubble>{cartItems}</Bubble>
            : null
          }
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