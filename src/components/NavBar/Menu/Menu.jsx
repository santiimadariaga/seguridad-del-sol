import React, { useContext, useEffect, useRef } from 'react';
import { Lista } from './menuStyled';
import MenuList from './MenuList';
import { MyContext } from '../../../context/MyContext';

const Menu = ({ menuRef }) => {
  const { user, checkTokens, getUser } = useContext(MyContext);
  const pathname = window.location.pathname;
  const sessionRef = useRef();

  useEffect(() => {
    if (user === 'Iniciar Sesión') {
      checkTokens();
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Lista ref={menuRef}>
        {pathname === '/login' || pathname === '/register' ? (
          // login page
          <MenuList login />
        ) : pathname === '/user' ? (
          // user page
          <MenuList user />
        ) : (
          // main page
          <MenuList sessionRef={sessionRef} sessionExist={user} />
        )}
      </Lista>
    </>
  );
};

export default Menu;