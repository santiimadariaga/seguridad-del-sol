import React from 'react'
import { Box, ContentBox, ContentP, Span, Welcome } from './BoxTwoStyled'

const BoxTwo = ({register}) => {
  return (
    <ContentBox>
        <Box>
            <Welcome>BIENVENIDO</Welcome>
            {
            register ?
                <ContentP>
                    <p style={{fontSize: "clamp(12px, 3vw, 18px)"}} >¿Ya tenés cuenta? <Span href="/login">Inicia Sesión!</Span></p>
                </ContentP>
            :
                <ContentP>
                    <Span href="#">¿Olvidaste tu contraseña?</Span>
                    <p style={{fontSize: "clamp(12px, 3vw, 18px)"}} >¿No tenés cuenta? <Span href="/register">Registrate!</Span></p>
                </ContentP>
            }
        </Box>
    </ContentBox>
)
}

export default BoxTwo