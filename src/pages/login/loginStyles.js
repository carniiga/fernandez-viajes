import styled from "styled-components"
import { ButtonForm, EmailLogoForm, PasswordLogoForm, RegisterLogoContainer, RegisterTitle, RegisterTitleContainer } from "../RegisterPage/RegisterStyles";
import { Form , Field } from "formik";




export const LoginContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    height: 100vh;
`;

export const LoginTitleContainer = styled(RegisterTitleContainer)`

`;
export const LoginTitle = styled(RegisterTitle)`

`;
export const LoginForm = styled(Form)`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 50%;
    height: 80vh;
    @media(min-width:320px){
        width: 100%;
    }
    @media(min-width:425px){
        width: 80%;
    }
    @media(min-width:768px){
        width: 50%;
    }
    @media(min-width:1440px){
        width: 40%;
    }
`;
export const InputsLoginContainer = styled.div`
    margin: 20px auto;
    width: 60%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(min-width:320px){
        width: 100%;
    }
`;

export const UserLogoContainer  = styled(RegisterLogoContainer)`

`;

export const EmailLogo = styled(EmailLogoForm)`
  
`;
export const PasswordLogo = styled(PasswordLogoForm)``;

export const LoginInputs = styled(Field)`
    height: 30px;
    width: 60%;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-left: 10px;
    
`;

export const ButtonContainer = styled(ButtonForm)`

`;



