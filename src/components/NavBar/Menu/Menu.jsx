import React from 'react'
import { AnchorMenu, Lista } from './menuStyled'
import CartBtn from '../../Cart/CartButton'
import menuList from '../../../utils/menuList'

const Menu = ({menuRef}) => {

    const pathname = window.location.pathname
    const menuLogin = menuList.filter( list => list.name === "Inicio")
    
  return (
<>
        <Lista ref={menuRef}>
            {
                pathname === "/login" || pathname === "/register" ?
                menuLogin.map( ({ name, href, id }) => {
                    return (
                        <li key={id}>
                            <AnchorMenu href={href}>{name}</AnchorMenu>
                        </li> )
                })
                :
                menuList.map( ({ name, href, id }) => {
                    return (
                        <li key={id}>
                            <AnchorMenu href={href}>{name}</AnchorMenu>
                        </li> )
                })
            }            
        </Lista>

                     {/* VER ESTO */}

            { pathname !== "/login" && pathname !== "/register"  ?
                <CartBtn />
                : null
            }
</>

  )
}

export default Menu