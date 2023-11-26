import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import { axiosDb } from '../config/axios';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [user, setUser] = useState('Iniciar Sesión');

  const [session, setSession] = useState(null);

  const checkTokens = async () => {
    if (!Cookies.get('Auth')) {
      // console.log('Requiere iniciar sesión...');
      return;
    }

    try {
      const token = Cookies.get('Auth');
      setSession(token);
    } catch (error) {
      setSession(null);
    }
  };

  async function getUser() {
    try {
      if (session === null) {
        setUser('Iniciar Sesión');
        return;
      }
      // traigo el name del user
      const userName = await axiosDb.post('/userByToken', {
        token: session,
      });
      setUser(userName.data);
    } catch (error) {
      setUser('Iniciar Sesión');
      console.log(user);
      return;
    }
  }

  useEffect(() => {
    checkTokens();
    getUser();
    // eslint-disable-next-line
  }, [session, user]);

  return (
    <MyContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        pass,
        setPass,
        session,
        user,
        setUser,
        checkTokens,
        getUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
