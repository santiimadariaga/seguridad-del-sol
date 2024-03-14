import React from 'react'
import { ContentHero, HeroContainer, TextHero, TextsHero, TitleHero } from './heroStyled'

const Hero = () => {
  return (
    <HeroContainer id='hero'>
      <ContentHero>
        <TextsHero>
          <TitleHero>Seguridad del Sol</TitleHero>
          <TextHero>Más de 15 años entregando el servicio a la comunidad!</TextHero>
          <TextHero>Consorcios, Empresas, Propiedades, PyMes y más!</TextHero>
        </TextsHero>
      </ContentHero>
    </HeroContainer>
  )
}

export default Hero