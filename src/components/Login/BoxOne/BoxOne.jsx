import React from 'react'
import { Box } from './BoxOneStyled'
import { ContentP, Span } from '../BoxTwo/BoxTwoStyled'
import { Formik } from 'formik'
import { loginValidationSchema, registerValidationSchema } from '../../../formik/validationSchema'
import { loginInitialValues, registerInitialValues } from '../../../formik/initialValues'
import Form from '../../FormLogin/Form'

const BoxOne = ({register}) => {
  return (
        register ? 
        <Box>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={registerInitialValues}
          >
            <Form register/>
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
            <Form />
          </Formik>
          <ContentP media>
              <Span href="#">¿Olvidaste tu contraseña?</Span>
              <p style={{fontSize: "clamp(12px, 3vw, 18px)"}} >¿No tenés cuenta? <Span href="/register">Registrate!</Span></p>
          </ContentP>
        </Box>
  )
}

export default BoxOne