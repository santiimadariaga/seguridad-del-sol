import React, { useContext, useEffect, useRef } from 'react'
import InputLogin from '../Login/InputLogin/InputLogin'
import { Button, FormStyled } from './formStyled'
import axios from 'axios'
import { MyContext } from '../../context/MyContext'
import { useNavigate } from 'react-router-dom'

const DBURL = 'http://localhost:8000/db/login'

const Form = ({register}) => {

    // useStates del context ===>
    const { name: contextName, email: contextEmail, pass: contextPass, setName, setEmail, setPass } = useContext(MyContext);
    const formRef = useRef()
    const navigate = useNavigate()

    async function setStatesRegister(nameC, emailC, passC) {
      // mando un post con las variables actualizadas a la db
      const inputLogin = await axios.post(DBURL, {name: nameC, email: emailC, password: passC})
      return inputLogin
    }
  
    const setAndRegister = async (e) => {
      e.preventDefault();
  
      // valores de los inputs usando el formRef
      const nameValue = formRef.current[0].value;
      const emailValue = formRef.current[1].value;
      const passValue = formRef.current[2].value;
  
      // estados con los valores de los inputs
      setName(nameValue);
      setEmail(emailValue);
      setPass(passValue);

      navigate('/login');
    };
  
    useEffect(() => {
      // solo si todos los campos del contexto tienen valores, llamo a setStatesRegister
      if (contextName !== '' && contextEmail !== '' && contextPass !== '') {
        setStatesRegister(contextName, contextEmail, contextPass);
      }
    }, [contextName, contextEmail, contextPass]);

  return (
     register ?
        <FormStyled onSubmit={setAndRegister} ref={formRef}>
            <InputLogin name="name" content="Nombre" type="text" />
            <InputLogin type="email" name="email" content="Email" />
            <InputLogin type="password" name="password" content="Contraseña" />
            <InputLogin type="password" name="confirmPassword" content="Confirme la contraseña" />
            <Button>REGISTRAR</Button>
        </FormStyled>
        : 
        <FormStyled>
            <InputLogin type="email" name="email" content="Email" />
            <InputLogin type="password" name="password" content="Contraseña" />
            <Button>INGRESAR</Button>
        </FormStyled>
  )
}

export default Form