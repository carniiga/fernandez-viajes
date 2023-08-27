import styled from "styled-components"
import { Form , Field } from "formik";
export const ForgotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    background-image: url("/images/ee856f10084e203efefe7400a92d8d9e.jpg");
    background-position: center ;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: var(--font);
`;

export const ForgotFormContainer = styled.div`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ForgotTitleContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
`;

export const ForgotTitle = styled.h3`
   
 font-weight:bold; 
font-size: 17px; 
color: #EBD758; 
text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68;
`;
export const ForgotForm = styled(Form)`
    margin: 0 auto;
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;  
export const ForgotInput = styled(Field)`
    height: 30px;
    width: 180px;
    border: 1px solid black;
    border-radius: 5px;
    padding-left: 5px;
    border-style: none;
    outline: none;
`;
export const ForgotErrorParagraph = styled.p`
    color: red;
    font-size: 16px;
`;
export const ButtonForgotContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ButtonForgot = styled.button`
    background-color: var(--bg-color);
    height: 30px;
    width: 80px;
    border-radius:30px;
    margin-top: 30px;
    border-style: none;
    color: white;
    cursor: pointer;
`;