import React from 'react'
import WhatsAppContact from './WhatsAppContact'
import InstagramContact from './InstagramContact'
import { ContactStyled } from './stylesContact'

const Contact = () => {
  return (
    <ContactStyled id='contacto'>
        <WhatsAppContact />
        <InstagramContact />
    </ContactStyled>
  )
}

export default Contact