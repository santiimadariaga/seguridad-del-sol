import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContentTitle, ContainerCartProducts, ContainerPlus, ContentBtn, ContentProduct, ImgCard, ImgContainer, Price, TitleProduct } from './cartProductsStyled'
import * as CartActions from '../../../redux/cart/cart-actions'
import { ConsultButton } from '../../Productos/CardsProducts/cardsStyled'

const CartProducts = () => {

  const { cartList } = useSelector(state => state.cart);
  const dispatch = useDispatch()

  return (
    <ContainerCartProducts>
        {
         cartList.map( (item, index) => {
          return(
            <ContentProduct key={index} >

              <ContentTitle className='title'>
                <TitleProduct>{item.name}</TitleProduct>
              </ContentTitle>

              <ImgContainer>
                <ImgCard src={item.photo} alt="" />
              </ImgContainer>

              <ContainerPlus>
                <ContentBtn>
                  <ConsultButton cart
                    onClick={() => dispatch(CartActions.removeFromCart(item))}
                  >-</ConsultButton>
                  <Price>{item.quantity}</Price>
                  <ConsultButton cart
                    onClick={() => dispatch(CartActions.addToCart(item))}
                  >+</ConsultButton>
                </ContentBtn>
                <Price total>${item.price}</Price>
              </ContainerPlus>

            </ContentProduct>
            )
          } )
        }
    </ContainerCartProducts>
  )
}

export default CartProducts