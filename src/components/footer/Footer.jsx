import React from 'react'
import { CopyAndDirectionContainer, FooterContainer, FooterLi, FooterParagraph, FooterUl, FooterUlContainer } from './footerStyles'

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterUlContainer>
        <FooterUl>
            <FooterLi>Trabaja con nosotros</FooterLi>
            <FooterLi>Términos y condiciones</FooterLi>
            <FooterLi>Cómo cuidamos tu privacidad</FooterLi>
            <FooterLi>Accesibilidad</FooterLi>
            <FooterLi>Información al usuario financiero</FooterLi>
            <FooterLi>Ayuda</FooterLi>
            <FooterLi>Defensa del Consumidor</FooterLi>
            <FooterLi>Información sobre seguros</FooterLi>
        </FooterUl>
        <CopyAndDirectionContainer>
            <FooterParagraph>Copyright Viajes Fernandez S.R.L.</FooterParagraph>
            <FooterParagraph>Av. Siempre viva 2328,Jose C Paz.</FooterParagraph>
        </CopyAndDirectionContainer>
        </FooterUlContainer>
        
    </FooterContainer>
    </>
  )
}

export default Footer