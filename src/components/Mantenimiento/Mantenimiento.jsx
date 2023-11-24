import React from 'react'
import { Box, Img } from './mantStyled'
import Imagenes from '../assets/imagenes'
import { TitleHero } from '../Hero/heroStyled'

const Mantenimiento = () => {
  return (
    <Box>
        <TitleHero>
            Disculpe las molestias
        </TitleHero>
        <Img src={Imagenes.mantenimiento} />
        <TitleHero>
            Página en mantenimiento!
        </TitleHero>
    </Box>
  )
}

export default Mantenimiento