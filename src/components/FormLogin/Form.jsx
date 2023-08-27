import React, { useContext, useEffect, useRef } from 'react'
import InputLogin from '../Login/InputLogin/InputLogin'
import { Button, ErrorParraf, FormStyled } from './formStyled'
import { MyContext } from '../../context/MyContext'
import { useNavigate } from 'react-router-dom'
import { loginLogic } from './loginLogic'
import { setStatesRegister } from './registerLogic'


const Form = ({register}) => {
 
    const navigate = useNavigate()
    // states del context
    const { name: contextName, email: contextEmail, pass: contextPass, setName, setEmail, setPass } = useContext(MyContext);
    // refs
    const registerRef = useRef()
    const loginRef = useRef()
    const errorRef = useRef()
  
    // REGISTER
    const setAndRegister = async (e) => {
      e.preventDefault();
      // valores de los inputs usando el registerRef
      const nameValue = registerRef.current[0].value;
      const emailValue = registerRef.current[1].value;
      const passValue = registerRef.current[2].value;
  
      // estados con los valores de los inputs
      setName(nameValue);
      setEmail(emailValue);
      setPass(passValue);

      if ( nameValue && emailValue && passValue ) {
        // crear loading...
        navigate('/login');
      }
      return;
    };
  
    useEffect(() => {
      // solo si todos los campos del contexto tienen valores, llamo a setStatesRegister
      if (contextName !== '' && contextEmail !== '' && contextPass !== '') {
        setStatesRegister(contextName, contextEmail, contextPass);
      }
    }, [contextName, contextEmail, contextPass]);

    // LOGIN
    const setAndLogin = async (e) => {
      e.preventDefault()
      await loginLogic(errorRef, loginRef)
    }

  return (
     register ?
        <FormStyled onSubmit={setAndRegister} ref={registerRef}>
            <InputLogin name="name" content="Nombre" type="text" />
            <InputLogin type="email" name="email" content="Email" />
            <InputLogin type="password" name="password" content="Contraseña" />
            <InputLogin type="password" name="confirmPassword" content="Confirme la contraseña" />
            <Button>REGISTRAR</Button>
        </FormStyled>
        : 
        <FormStyled onSubmit={setAndLogin} ref={loginRef}>
            <InputLogin type="email" name="email" content="Email" />
            <InputLogin type="password" name="password" content="Contraseña" />
            <ErrorParraf ref={errorRef} >Email o contraseña incorrectos</ErrorParraf>
            <Button>INGRESAR</Button>
        </FormStyled>
  )
}

export default Form