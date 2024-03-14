import React from 'react'
import Imagenes from '../assets/imagenes'
import { BtnContact, ContainerContacts, ContentContacts, ImgContacts } from './stylesContact'


const WhatsAppContact = () => {
  return (
    <ContainerContacts>
        <ContentContacts>
            <ImgContacts src={Imagenes.wppConverse} alt="imgWpp" />
            <BtnContact onClick={() => window.open(`https://wa.me/5491121724526?text=Hola,%20necesito%20hacer%20una%20recarga`, "_blank")}>Enviar mensaje</BtnContact>
        </ContentContacts>
    </ContainerContacts>
  )
}

export default WhatsAppContact