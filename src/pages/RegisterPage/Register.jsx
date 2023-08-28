import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import {
  ButtonForm,
  EmailLogoForm,
  FormContainer,
  InputsContainer,
  PasswordLogoForm,
  RegisterContainer,
  RegisterInputs,
  RegisterLogoContainer,
  RegisterTitle,
  RegisterTitleContainer,
  UserLogoForm,
  ErrorMsg,
  OkMsg,
  HaveAccountContainer,
  HaveAcoountMsg,
  RegisterWrapper
} from "./RegisterStyles";
import { Formik } from "formik";
import { registerSchema, registerUserFetch } from "./registerUtils";
import { useNavigate } from "react-router-dom";
import * as userActions from "../../redux/userReducer/userActions"
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [mensaje , setMensaje] = useState("")
  const navigate = useNavigate()
  const menuHidden = useSelector(state =>  state.user.hiddenMenu)
  const dispatch = useDispatch()
  useEffect(() => {
     if (menuHidden == false){
      dispatch(userActions.hiddenMenu())
    }
  }, [])
  return (
    <>
    <RegisterWrapper>
      <Navbar />
      <RegisterContainer>
        <RegisterTitleContainer>
          <RegisterTitle>Registrarse</RegisterTitle>
        </RegisterTitleContainer>
        <Formik
        initialValues={{
            userName : "",
            email : "",
            password : "",
            repeatPassword : ""
        }}
        validationSchema={registerSchema}
        onSubmit={async ( values , {resetForm})  =>  { 
            const {userName , email , password} = values  
            const createUser = {userName , email , password}
            const saveUser = await registerUserFetch(createUser)
            if(saveUser === false){
              setMensaje("este usuario ya existe")
              setTimeout(() => {
                resetForm()
                navigate("/login")
              }, "3000")
              
            }else{
              setMensaje("usuario creado exitosamente")
              setTimeout(() => {
                resetForm()
                setMensaje("")
                navigate("/login")
              }, "3000")
            }
           
            
            
        }}
        >
        {({errors , touched  , resetForm}) => (
             <FormContainer >
             <InputsContainer>
               <RegisterLogoContainer>
                 <UserLogoForm />
               </RegisterLogoContainer>
               <RegisterInputs name = "userName"/>
             </InputsContainer>
             {errors.userName && touched.userName ? (
                <ErrorMsg>{errors.userName}</ErrorMsg>
           ) : null}
             <InputsContainer>
               <RegisterLogoContainer>
                 <EmailLogoForm />
               </RegisterLogoContainer>
               <RegisterInputs name = "email"/>
             </InputsContainer>
             {errors.email && touched.email ? (
             <ErrorMsg>{errors.email}</ErrorMsg>
           ) : null}
             <InputsContainer>
               <RegisterLogoContainer>
                 <PasswordLogoForm />
               </RegisterLogoContainer>
               <RegisterInputs  type = "password"  name = "password"/>
             </InputsContainer>
             {errors.password && touched.password ? (
            <ErrorMsg>{errors.password}</ErrorMsg>
           ) : null}
             <InputsContainer>
               <RegisterLogoContainer>
                 <PasswordLogoForm />
               </RegisterLogoContainer>
               <RegisterInputs  type = "password"  name = "repeatPassword"/>
             </InputsContainer>
             {errors.repeatPassword && touched.repeatPassword ? (
            <ErrorMsg>{errors.repeatPassword}</ErrorMsg>
           ) : null}
              {<div>{mensaje}</div>}
             <ButtonForm type="submit">Enviar</ButtonForm>
           </FormContainer>
        )}
       
        </Formik>
        <HaveAccountContainer>
              <HaveAcoountMsg onClick={() => navigate("/login")}>¿Ya tenes cuenta? </HaveAcoountMsg>
        </HaveAccountContainer>
      </RegisterContainer>
      </RegisterWrapper>
    </>
  );
};

export default Register;
