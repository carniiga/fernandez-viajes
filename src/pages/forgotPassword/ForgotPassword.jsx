import React from 'react'
import { ButtonForgot, ButtonForgotContainer, ForgotErrorParagraph, ForgotForm, ForgotFormContainer, ForgotInput, ForgotTitle, ForgotTitleContainer, ForgotWrapper } from './forgotPasswordStyles'
import {Navbar} from "../../components/navbar/navbar"
import Footer from "../../components/footer/Footer"
import { Formik } from 'formik'
import { fetchEmailDb } from './forgotPassUtil'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
  const navigate = useNavigate()
  return (
    <> 
    <ForgotWrapper>
      <Navbar/>
      <ForgotFormContainer>
      <ForgotTitleContainer>
        <ForgotTitle>Ingresa el email para restablecer la contraseña</ForgotTitle>
      </ForgotTitleContainer>
      <Formik
      initialValues={{
        email : "",
      }}
      validate={(values) => {
        const errors = {};
        if(!values.email){
          errors.email = "ingrese email "
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
          errors.email = "email invalido";
        }
        return errors
      }}
      onSubmit={async values => {
        const sendEmail = await fetchEmailDb(values.email)
        navigate(`/emailSent/${values.email}`)
        

      }}
      >
        {({errors,touched}) => (
           <ForgotForm>
           <ForgotInput name= "email" type = "email" placeholder = "ingrese email"/>
           {errors.email && touched.email ? (
            <ForgotErrorParagraph>{errors.email}</ForgotErrorParagraph>
           ) : null}
            <ButtonForgotContainer>
            <ButtonForgot type='submit' >Enviar</ButtonForgot>
            </ButtonForgotContainer>
           </ForgotForm>
        )}
     
      </Formik>
      </ForgotFormContainer>
      <Footer></Footer>
    </ForgotWrapper>
      </>
  )
}

export default ForgotPassword