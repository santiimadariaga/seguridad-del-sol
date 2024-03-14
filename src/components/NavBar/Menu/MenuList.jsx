// import Cookies from 'js-cookie';
import { AnchorMenu } from './menuStyled';

const MenuList = ({ login, user, sessionExist, sessionRef }) => {

  // async function deleteCookie() {
  //   console.log('logica logout')
  //   Cookies.remove('Auth')
  //   return 'logica logout'
  // }

  if (login) {
    return (
      <>
        <li>
          <AnchorMenu href='/'>Inicio</AnchorMenu>
        </li>
      </>
    )
  } else if (user) {
    return (
      <>
        <li>
          <AnchorMenu href='/'>Inicio</AnchorMenu>
        </li>
{/* 
        <li>
          <AnchorMenu onClick={ deleteCookie } href='/' >
            Cerrar Sesión
          </AnchorMenu>
        </li>
*/}

      </>
    )
  }
  return (
    <>
        <li>
          <AnchorMenu href='/'>Inicio</AnchorMenu>
        </li>
        <li>
          <AnchorMenu href='#venta'>Venta</AnchorMenu>
        </li>
        <li>
          <AnchorMenu href='#contacto'>Recarga</AnchorMenu>
        </li>
{/*         
        <li>
          <AnchorMenu ref={sessionRef} href={ sessionExist === `Iniciar Sesión` ? `/login` : `/user` }>
            {sessionExist}
          </AnchorMenu>
        </li>
*/}
    </>
  );
};

export default MenuList;
