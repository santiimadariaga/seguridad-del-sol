import React from 'react'
import Imagenes from '../assets/imagenes'
import { BtnContact, ContainerContacts, ContentContacts, ImgContacts } from './stylesContact'
import links from '../../utils/links'


const InstagramContact = () => {
  return (
    <ContainerContacts>
        <ContentContacts ig>
            <ImgContacts src={Imagenes.infoInstagram} alt="imgWpp" />
            <BtnContact ig onClick={() => window.open(links.instagram, "_blank")}>Seguinos</BtnContact>
        </ContentContacts>
    </ContainerContacts>
  )
}

export default InstagramContact