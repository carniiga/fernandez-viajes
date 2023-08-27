import React, { useState } from 'react'
import { Navbar } from '../../components/navbar/navbar'
import {  ButtonContainer, EmailLogo, InputsLoginContainer, LoginContainer, LoginForm  ,LoginInputs,LoginTitle, LoginTitleContainer,  PasswordLogo,  UserLogoContainer } from './loginStyles'
import * as userActions from "../../redux/userReducer/userActions"
import { Formik } from 'formik'
import { loginSchema, validationUser } from './loginSchema'
import { ErrorMsg, HaveAccountContainer, HaveAcoountMsg, RegisterWrapper } from '../RegisterPage/RegisterStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from "../../components/footer/Footer"

const Login = () => {
  const [errorMsg , setErrorMsg] = useState(false)
  const dispatch = useDispatch()
  const userLogin = useSelector(state =>  state.user.user)
  const navigate = useNavigate()
  setTimeout(()=> {
    if(userLogin) {
      navigate("/")
    }
  },"1000")
  return (
    <>
    <RegisterWrapper>
    <Navbar/>
    <LoginContainer>
      <LoginTitleContainer>
      <LoginTitle>Ingresa</LoginTitle>
      </LoginTitleContainer>
      <Formik
        initialValues={{
          email : "" ,
          password : "",
        }} 
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          const loginUser = await validationUser(values)
          const {token , userName , rol} = loginUser
          console.log(loginUser)
          if(loginUser === "contraseña y/o usuario incorrecto."){
            setErrorMsg(true)
            return 
          }else  {
            dispatch(userActions.userLogin(userName , rol ,token))

          }
      

        }}
        
      
      >
     {({errors, touched}) => (
      <LoginForm>
      <InputsLoginContainer>
        <UserLogoContainer>
         <EmailLogo/>
        </UserLogoContainer>
        <LoginInputs type='email' name='email'/>
      </InputsLoginContainer>
      {errors.password && touched.password  ? (
        <ErrorMsg>{errors.email}</ErrorMsg>
      ) : null}
      <InputsLoginContainer>
      <UserLogoContainer>
        <PasswordLogo/>
      </UserLogoContainer>
      <LoginInputs type='password' name='password' />
      </InputsLoginContainer>
      {errors.password && touched.password ? (
        <ErrorMsg>{errors.password}</ErrorMsg>
      ) : null}
      {errorMsg ? (<ErrorMsg>contraseña y/o usuario incorrecto</ErrorMsg>) : (null)}
      <ButtonContainer type='submit'>Enviar</ButtonContainer>
      <HaveAccountContainer>
      <HaveAcoountMsg onClick={() => navigate("/forgot-password")}>¿Perdiste la contraseña?</HaveAcoountMsg>
      </HaveAccountContainer>
      </LoginForm>
      
     )}
     
    </Formik>
    
    </LoginContainer>
    <Footer></Footer>
    </RegisterWrapper>

    </>
    
  )
}

export default Login