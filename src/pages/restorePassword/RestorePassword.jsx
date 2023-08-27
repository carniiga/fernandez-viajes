import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RestoreButton, RestoreButtonContainer, RestoreContainer, RestoreErrorParagraph, RestoreFormContainer, RestoreInput, RestoreTitle, RestoreTitleContainer, RestoreWrapper } from './restorePassStyles'
import {Navbar} from "../../components/navbar/navbar"
import Footer from "../../components/footer/Footer"
import { Formik } from 'formik'
import { restorePass } from './restoreUtils'
const RestorePassword = () => {
  const navigate = useNavigate()
  const {userId} = useParams()
  const redirect = () => {
    navigate("/passwordRestored")
  }
  return (
    <>
    <RestoreWrapper>
      <Navbar/>
      <RestoreContainer>  
        <RestoreTitleContainer>
          <RestoreTitle>Restablezca contraseña</RestoreTitle>
        </RestoreTitleContainer>
        <Formik
        initialValues={{
          password : "",
          repeatPassword : "",
        }}
        validate={(values) => {
          let errors = {};
          if(!values.password){
            errors.password = "ingrese contraseña"
          }else if(!/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,20}$/.test(values.password)){
          errors.password = "1 mayuscula, 1 numero ,  1 caracter especial y min 8 caracteres"
          }if(!values.repeatPassword){
            errors.repeatPassword = "repita la contraseña"
          }else if (values.password !== values.repeatPassword){
            errors.repeatPassword = "las contraseñas no coinciden"
          }
          return errors
        }
      }
        onSubmit={async values => {
          if(values.password === values.repeatPassword){
           const restore = await restorePass(values.password , userId).then(redirect())
          }
         
        }}
        >
          {({errors , touched }) => (
             <RestoreFormContainer>
             <RestoreInput name ="password" placeholder = "Contraseña">
             </RestoreInput>
             {errors.password && touched.password ? (
              <RestoreErrorParagraph>{errors.password}</RestoreErrorParagraph>
             ) : (null)}
             <RestoreInput name = "repeatPassword" placeholder = "Repita contraseña">
             </RestoreInput>
             <RestoreButtonContainer>
               <RestoreButton type='submit' >Restablecer</RestoreButton>
             </RestoreButtonContainer>
             {errors.repeatPassword && touched.repeatPassword ? (
              <RestoreErrorParagraph>{errors.repeatPassword}</RestoreErrorParagraph>
             ) : (null)}
             </RestoreFormContainer>
          )}
       
        </Formik>
      </RestoreContainer>
      <Footer/>
    </RestoreWrapper>
    </>
  )
}

export default RestorePassword