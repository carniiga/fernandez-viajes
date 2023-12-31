import React, { useEffect, useState } from 'react'
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
  const [errorMsg , setErrorMsg] = useState(false) //hacemos un estado de manejo de true o false para mostrar un mensaje de error en color rojo. 
  const dispatch = useDispatch()
  const userLogin = useSelector(state =>  state.user.user) //se accede al estado del user , para verificar si se logeo. y si se logeo se redirecciona al home
  const navigate = useNavigate()
  const menuHidden = useSelector(state =>  state.user.hiddenMenu) //accedemos al estado del  menu responsive, para asegurarnos que quede cerrado  si se navega a una seccion de la app. 
  
  setTimeout(()=> {
    if(userLogin) {
      navigate("/")
    }
  },"1000")
  useEffect(() => {
    if (menuHidden == false){
        dispatch(userActions.hiddenMenu())
      }
    }, [])
  
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
          //una vez tenido los valores se manda la peticion  con metodo "POST" para logearse y obtener la informacion del usuario y del token. 
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