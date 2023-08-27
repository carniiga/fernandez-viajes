import styled from "styled-components"
import {BiUserCircle} from "react-icons/bi"
import {MdOutlineEmail} from "react-icons/md"
import { BsFillKeyFill} from "react-icons/bs"
import { Form , Field } from "formik"

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url("/images/ee856f10084e203efefe7400a92d8d9e.jpg");
    background-position: bottom ;
    background-size: cover;
    background-repeat: no-repeat;
`;
export const RegisterContainer = styled.div`
    width: 50%;
    margin: 20px auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(5px);
    @media(min-width:320px){
        width: 100%;
    }
    
`;

export const RegisterTitleContainer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
   
    
`;
export const RegisterTitle = styled.h2`
    font-family: var(--font);
    font-size: 50px;
    color: #EBD758;
    text-shadow: var(--text-shadow);
`;
export const FormContainer  = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 20px auto;
    width: 80%;
    height: 50vh;
`;

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    width: 80%;
    @media(min-width:320px){
        width: 300px;
    }
`;
export const RegisterInputs = styled(Field)`
    height: 30px;
    width: 60%;
    outline: none;
    border: none;
    border-radius: 20px;
    padding-left: 10px;
    @media(min-width:320px){
        width: 70%;
    }
`;
export const RegisterLogoContainer = styled.div`
    display: flex;
    height: 40px;
    width: 40px;
    border: 1px solid var(--bg-color);
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: var(--bg-color);
    border-radius: 100%;
`;

export const UserLogoForm = styled(BiUserCircle)`
    color: white;
    font-size: 40px;
`;

export const EmailLogoForm = styled(MdOutlineEmail)`
    color: white;
    font-size: 30px;
`;
export const PasswordLogoForm = styled(BsFillKeyFill)`
    color: white;
    font-size: 30px;
`;

export const ButtonForm = styled.button`
    border: 1px solid var(--bg-color);
    background-color: var(--bg-color);
    border-radius: 20px;
    width: 100px;
    height: 30px;
    font-family: var(--font);
    color: white;
    font-size: 15px;
    cursor: pointer;
    
`

export const ErrorMsg = styled.div`
    color: red;
`;

export const OkMsg = styled.div`
    color: green;
    font-size: 30px;
`;

export const HaveAccountContainer = styled.div`
    height: 30px;
    width: 30%;
    margin-left: 70%;
    display: flex;
    align-items: center;
    justify-content : center;
    text-align: center;
    @media(min-width:320px){
        width: 50%;
        margin-left: 50%;
    }
    @media(min-width: 425px){
        width: 40%;
        margin-left: 60%;
    }
    @media(min-width:768px){
        margin-left: 30%;
    }
`;
export const HaveAcoountMsg = styled.p`
    font-family: var(--font);
    cursor: pointer;
    font-size: 15px;
    &:hover{
        border-bottom: 1px solid black;
        font-size: 16px;

    }
`;

