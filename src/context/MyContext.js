import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [session, setSession] = useState(null);

  useEffect(() => {
    const checkTokens = async () => {
      if (!Cookies.get()) {
        console.log('Requiere iniciar sesión...');
        return 'Requiere iniciar sesión...';
      }

      try {
        const token = Cookies.get('Auth');
        setSession(token);
      } catch (error) {
        setSession(null);
        console.log(error);
      }
    };

    checkTokens();
  }, []);

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
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
