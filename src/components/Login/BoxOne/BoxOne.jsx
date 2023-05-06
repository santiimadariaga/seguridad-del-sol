import React from 'react'
import { Box, Button, FormStyled } from './BoxOneStyled'
import InputLogin from '../InputLogin/InputLogin'
import { ContentP, Span } from '../BoxTwo/BoxTwoStyled'
import { Formik } from 'formik'
import { loginValidationSchema } from '../../../formik/validationSchema'
import { loginInitialValues } from '../../../formik/initialValues'

const BoxOne = () => {
  return (
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
            <p style={{fontSize: "clamp(12px, 3vw, 18px)"}} >¿No tenés cuenta? <Span href="#">Registrate!</Span></p>
        </ContentP>

      </Box>
  )
}

export default BoxOne