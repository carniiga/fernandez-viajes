import React, { useEffect } from 'react'
import { ButtonForgot, ButtonForgotContainer, ForgotErrorParagraph, ForgotForm, ForgotFormContainer, ForgotInput, ForgotTitle, ForgotTitleContainer, ForgotWrapper } from './forgotPasswordStyles'
import {Navbar} from "../../components/navbar/navbar"
import Footer from "../../components/footer/Footer"
import { Formik } from 'formik'
import { fetchEmailDb } from './forgotPassUtil'
import { useNavigate } from 'react-router-dom'
import * as userActions from "../../redux/userReducer/userActions"
import { useDispatch, useSelector } from 'react-redux'
const ForgotPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const menuHidden = useSelector(state => state.user.hiddenMenu)
  useEffect(() => {
    if (menuHidden == false){
        dispatch(userActions.hiddenMenu())
      }
    }, [])
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
          //este maneja el error , que si no ingresa ningun dato en el campo se le pide que lo ingrese.
          errors.email = "ingrese email "
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
          errors.email = "email invalido";
        }
        // si lo ingresa , se le aplica un regex que pide datos de formato :  un caracter especial una mayuscula y numeros.
        return errors
      }}
      onSubmit={async values => {
        //una vez que se  mande los datos se llama a una funcion que se encarga de realizar la peticion "POST" para restablecer la contraseña.Luego se lo direcciona a la pagina informandole que se le mando un email con el link para restablecer la contraseña. 
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