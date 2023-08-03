import { createContext, useState } from 'react';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <MyContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        pass,
        setPass,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
