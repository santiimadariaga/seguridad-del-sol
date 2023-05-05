import React, { useRef, useState } from 'react'
import { ContentHeader, Header, Logo, MenuIconStyled, CloseIconStyled, FlexNav } from './navbarStyled'
import Imagenes from '../assets/imagenes'
import Menu from './Menu/Menu'
import { Overlay } from '../Cart/CartBtnStyled'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef()

  const handlerOpenMenu = () => {
    if( isOpen === false ) {
      menuRef.current.style.right = "0"
      setIsOpen(true)
    } else if ( isOpen === true ) {
      menuRef.current.style.right = "-100%"
      setIsOpen(false)
    }
  }

  return (
      <Header>
        <ContentHeader>
          
          <Logo to={"/"}>
            <img style={{width: "100%"}} src={Imagenes.logoHeader} alt='logo' />
          </Logo>

          <FlexNav>
            {
              isOpen ?
              <CloseIconStyled fontSize='large' onClick={handlerOpenMenu}  />
              : <MenuIconStyled fontSize='large' onClick={handlerOpenMenu} />
            }

            <Menu menuRef={menuRef}/>

          </FlexNav>
          
            { isOpen ?
              <Overlay onClick={handlerOpenMenu} />
              : null
            }

        </ContentHeader>
      </Header>
  )
}

export default Navbar