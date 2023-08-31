import React from 'react'
import { ButtonHome, ButtonSentHome, EmailSentContainer, EmailSentWrapper, SentEmailPGContainer, SentEmailPh } from './EmailSentStyles'
import Footer from '../../components/footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'


const EmailSent = () => {
    const navigate = useNavigate()
    const {email} = useParams()
    //esta seccion se encarga de   mostrar un simple mensaje de que el email que se ingreso en "ForgotPassword"  se le ha  mandado  el email con el link para restablecer la contraseña.

  return (
    <>
    <EmailSentWrapper>
        <EmailSentContainer>
        <SentEmailPGContainer>
            <SentEmailPh>Te hemos enviado un 📨 a {email}  para restablecer la contraseña </SentEmailPh>
        </SentEmailPGContainer>
        <ButtonSentHome>
            <ButtonHome onClick={() => navigate("/") }>Volver a inicio</ButtonHome>
        </ButtonSentHome>
        </EmailSentContainer>
        <Footer/>
    </EmailSentWrapper>
    </>
  )
}

export default EmailSent