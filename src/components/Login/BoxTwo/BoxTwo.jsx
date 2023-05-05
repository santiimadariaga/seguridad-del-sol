import React from 'react'
import { Box, ContentP, Span, Welcome } from './BoxTwoStyled'

const BoxTwo = () => {
  return (
    <Box>
        <Welcome>BIENVENIDO</Welcome>
        <ContentP>
            <Span href="#">¿Olvidaste tu contraseña?</Span>
            <p>¿No tenés cuenta? <Span href="#">Registrate!</Span></p>
        </ContentP>
    </Box>
)
}

export default BoxTwo