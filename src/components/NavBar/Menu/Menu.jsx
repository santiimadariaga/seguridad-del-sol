import React, { useContext, useEffect, useRef } from 'react'
import { Lista } from './menuStyled'
import CartBtn from '../../Cart/CartButton'
import MenuList from './MenuList'
import { MyContext } from '../../../context/MyContext'
// import { axiosDb } from '../../../config/axios'

const Menu = ({menuRef}) => {
    
    // const { session } = useContext(MyContext)
    const { user, checkTokens, getUser } = useContext(MyContext)
    const pathname = window.location.pathname
    const sessionRef = useRef()

    useEffect(() => {
      
      if (sessionRef === 'Iniciar Sesión') {
        checkTokens()
        getUser()
      }

      // eslint-disable-next-line
    }, [])

  return (
<>
        <Lista ref={menuRef}>
            {
                pathname === "/login" || pathname === "/register" ?
                // login page
                <MenuList login />
                : (
                  pathname === "/user" ?
                  // main page
                  <MenuList user />
                  :
                  <MenuList sessionRef={sessionRef} sessionExist={ user } />
                  )
            }
        </Lista>

        { pathname !== "/login" && pathname !== "/register"  ?
            <CartBtn />
            : null
        }
</>

  )
}

export default Menu