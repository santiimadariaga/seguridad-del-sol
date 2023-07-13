import React from 'react'
import { Box, Button, FormStyled } from './BoxOneStyled'
import InputLogin from '../InputLogin/InputLogin'
import { ContentP, Span } from '../BoxTwo/BoxTwoStyled'
import { Formik } from 'formik'
import { loginValidationSchema, registerValidationSchema } from '../../../formik/validationSchema'
import { loginInitialValues, registerInitialValues } from '../../../formik/initialValues'

const BoxOne = ({register}) => {
  return (
        register ? 
        <Box>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={registerInitialValues}
          >
            <FormStyled>
              <InputLogin id="name" name="name" content="Nombre" />
              <InputLogin id="email" name="email" content="Email" />
              <InputLogin id="pass" name="password" content="Contraseña"/>
              <Button class="btn_login">INGRESAR</Button>
            </FormStyled>
          </Formik>
          <ContentP media>
              <p style={{fontSize: "clamp(12px, 3vw, 18px)"}} >¿Ya tenés cuenta? <Span href="/login">Inicia Sesión!</Span></p>
          </ContentP>
        </Box>
        :  
        <Box>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={loginInitialValues}
          >
            <FormStyled>
              <InputLogin id="email" name="email" content="Email" />
              <InputLogin id="pass" name="password" content="Contraseña"/>
              <Button class="btn_login">INGRESAR</Button>
            </FormStyled>
          </Formik>
          <ContentP media>
              <Span href="#">¿Olvidaste tu contraseña?</Span>
              <p style={{fontSize: "clamp(12px, 3vw, 18px)"}} >¿No tenés cuenta? <Span href="/register">Registrate!</Span></p>
          </ContentP>
        </Box>
      
      
  )
}

export default BoxOne