import React from 'react'
import { WppContainer } from './wppStyled'
import Imagenes from '../assets/imagenes'
import links from '../../utils/links'


const Wpp = () => {

  return (
    <WppContainer  onClick={() => window.open(links.whatsappMsg, "_blank")}>
      <img style={{width: "100%"}} src={Imagenes.whatsApp} alt='wpp' />
    </WppContainer>
  )
}

export default Wpp