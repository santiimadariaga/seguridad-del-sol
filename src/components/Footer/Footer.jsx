import React from 'react'
import { AnchorFooter, ContactFooter, ContainerLogoFooter, ContentContact, ContentFooter, ContentIco, ContentLogo, CopyText, FooterContainer, ImgLogo, ImgLogoSecondar, InfoFoot, TextsContent } from './footerStyled'
import links from '../../utils/links'
import Imagenes from '../assets/imagenes'

const Footer = () => {
  
  return (
    <FooterContainer>
      <ContentFooter>
        <TextsContent>

        {/* INFORMACION */}
          <InfoFoot>
            <p><AnchorFooter href={links.home}>Información Legal</AnchorFooter></p>
            <p><AnchorFooter href={links.home}>Política de Privacidad</AnchorFooter></p>
            <p style={{fontSize: "clamp(12px, 5vw, 16px)"}} >
              Diseñador Web: 
              <AnchorFooter 
              href={links.github} 
              target='_blank'
              > Santiago Madariaga </AnchorFooter></p>
          </InfoFoot>

        {/* LOGO */}
          <ContainerLogoFooter>
            <ContentLogo>
              <ImgLogo src={Imagenes.logoFooter} alt="logo"  />
              <ImgLogoSecondar src="https://cayber.com.ar/wp-content/uploads/2020/06/fire-extinguisher-324x324.png" alt="" />
            </ContentLogo>
          </ContainerLogoFooter>

        {/* CONTACTO */}
          <ContactFooter>
            <ContentContact>
              <ContentIco>
                <img style={{width: "100%", height: "100%"}} src={Imagenes.wppIco} alt="wpp" />
              </ContentIco>
              <p><AnchorFooter href={links.whatsappMsg}>WhatsApp</AnchorFooter></p>
            </ContentContact>

            <ContentContact style={{marginRight: "34px"}}>
              <ContentIco>
                <img style={{width: "100%", height: "100%"}} src={Imagenes.emailIco} alt="email" />
              </ContentIco>
              <p><AnchorFooter href={links.emailMsg}>Email</AnchorFooter></p>
            </ContentContact>
          </ContactFooter>

        </TextsContent>

      {/* COPYRIGHT */}
        <CopyText>
          <p style={{fontSize: "12px"}}>© 2023 SEGURIDAD DEL SOL</p>
        </CopyText>

      </ContentFooter>
    </FooterContainer>
  )
}

export default Footer