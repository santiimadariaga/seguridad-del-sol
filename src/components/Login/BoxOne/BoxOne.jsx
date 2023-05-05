import React from 'react'
import { Box, Button } from './BoxOneStyled'
import InputLogin from '../InputLogin/InputLogin'

const BoxOne = () => {
  return (
    <Box>
        <InputLogin id="email" name="email" content="Email" />
        <InputLogin id="pass" name="password" content="Contraseña"/>
        <Button class="btn_login">INGRESAR</Button>
    </Box>
  )
}

export default BoxOne