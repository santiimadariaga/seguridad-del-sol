import React from 'react'
import { BoxIcon, BoxPrices, BtnFinalized, CartContainer, ContainerBtns, ContentTitle, IconStyled, OpacityP, Price, ShowMore, TitleCart } from './cartStyled'
import CartProducts from './CartProducts/CartProducts'
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../redux/cart/cart-actions'

const Cart = ({cartRef, handlerOpenCart}) => {

  let { cartList } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const cartLength = cartList.length

  const getCartTotal = () => {
    return cartList.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),
      0
    );
  }

  const finalizedShop = (e) => {
    e.preventDefault()

    if(window.confirm("¿Desea finalizar la compra?")) {
      alert("La compra ha sido finalizada")
      dispatch(CartActions.clearCart())
    }
    return
  }
  
  const deleteCart = (e) => {
    e.preventDefault()
    if(window.confirm("¿Desea eliminar todos los productos del carrito?")) {
      dispatch(CartActions.clearCart())
    }
    return
  }

  return (
    <CartContainer ref={cartRef}>

      <BoxIcon>
        <IconStyled onClick={handlerOpenCart}  />
      </BoxIcon>

      <ContentTitle >
        <TitleCart>Tus Compras:</TitleCart>
      </ContentTitle>

    { cartLength ?
      <CartProducts />
      :
      <OpacityP>Sin productos aún...</OpacityP>
     } 

      <BoxPrices>
        <p>Envío:</p>
        <p>Gratis</p>
      </BoxPrices>

      <BoxPrices>
        <p>Total:</p>
        <Price>${Number(getCartTotal())}</Price>
      </BoxPrices>

      { cartLength ?
        <ContainerBtns className='content_btn'>
          <BtnFinalized cartLength delete onClick={deleteCart} >Borrar Carrito</BtnFinalized>
          <BtnFinalized onClick={finalizedShop} cartLength>Finalizar compra</BtnFinalized>
        </ContainerBtns>
        :
        <BtnFinalized>Finalizar compra</BtnFinalized>
      }
      <ShowMore
       onClick={handlerOpenCart}
       href='/'
       >Ver más productos</ShowMore>

    </CartContainer>
  )
}

export default Cart