import {Form , Field} from "formik"
import styled from "styled-components"

export const FormUpdateContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
    @media(min-width : 375px){
        width: 100%;
    }
    @media(min-width: 1440px){
        width: 80%;
    }

`;

export const UpdateTitle = styled.h2`
    margin-top: 20px;
    font-size: 35px;
    color: #EBD758; 
    text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68;
    @media(min-width : 375px){
        font-size: 40px;
    }

`;
export const InputsUpdateContainer = styled.div`
    margin :  20px auto;
    width: 90%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    @media(min-width : 375px){
        height: 600px;
    }
    @media(min-width : 1024px){
        height: 300px;
    }

`;

export const InputUpdateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 40px;
    width: fit-content;
    margin: 20px;
    @media(min-width : 375px){
       flex-direction: column;
       height: 60px;
    }

`;

export const InputUpdate = styled(Field)`
    height: 30px;
    width: 200px;
    outline: none;
    border: 1px solid black;
    margin-left: 15px;
    padding-left: 10px;
    border-radius: 20px;
    @media(min-width : 375px){
        font-size: 16px;
    }


`;

export const ButtonUpdate = styled.button`
     height: 30px;
    width: 80px;
    border: 1px solid black;
    cursor: pointer;
    background-color: var(--bg-color);
    color: white;
    border-radius: 50px;
    margin-bottom: 50px;
    @media(min-width: 320px){
        margin-top: 20px;
    }
    @media(min-width : 375px){
        font-size: 16px;
    }

`;

