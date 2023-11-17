import React, { useContext, useEffect } from 'react'
import { AnchorMenu, Lista } from './menuStyled'
import CartBtn from '../../Cart/CartButton'
import menuList from '../../../utils/menuList'
import { MyContext } from '../../../context/MyContext'
import { axiosDb } from '../../../config/axios'

const Menu = ({menuRef}) => {
    
    const { session } = useContext(MyContext)
    const pathname = window.location.pathname
    const menuLogin = menuList.filter( list => list.name === "Inicio")

    useEffect(() => {
        async function getUser() {
            try {
                // console.log(session)
                const user = await axiosDb.post('/userByToken', {token: session})
                console.log('USER ==>', user)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])

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

        { pathname !== "/login" && pathname !== "/register"  ?
            <CartBtn />
            : null
        }
</>

  )
}

export default Menu