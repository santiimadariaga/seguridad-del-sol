import React from 'react'
import { Box, ContentBox, ContentP, Span, Welcome } from './BoxTwoStyled'

const BoxTwo = () => {
  return (
    <ContentBox>
        <Box>
            <Welcome>BIENVENIDO</Welcome>
            <ContentP>
                <Span href="#">¿Olvidaste tu contraseña?</Span>
                <p style={{fontSize: "clamp(12px, 3vw, 18px)"}} >¿No tenés cuenta? <Span href="#">Registrate!</Span></p>
            </ContentP>
        </Box>
    </ContentBox>
)
}

export default BoxTwo