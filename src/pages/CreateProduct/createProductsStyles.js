import styled from "styled-components"
import { Field, Form } from "formik";


export const CreateProdWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-image: url("/images/ee856f10084e203efefe7400a92d8d9e.jpg");
    background-position: bottom ;
    background-size: cover;
    background-repeat: no-repeat;
    @media(min-width:320px){
        gap: 50px;
    }
    @media (min-width: 375px ){
        gap: 100px;
       
    }
   
   
`;
export const TitleContainer = styled.div`
    margin-top: 20px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    @media(min-width:320px){
        margin:  0 0 50px 50px;
    }
    @media (min-width: 375px ){
        height: 100px;
        text-align: center;
    }
    
`;
export const TitleCreateProd = styled.h2`
    font-family: var(--font);
    color: #EBD758; 
    text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68;
    font-size: 40px;
    @media(max-width :320px){
        font-size: 30px ;
    }
`;

export const CreateProdsContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    @media(min-width: 1024px){
        height : 600px;
    }
`;

export const FormCreateContainer = styled(Form)`
    backdrop-filter: blur(10px);
    width: 90%;
    margin: 20px auto;
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 3px;
    @media(min-width:320px){
        height: 800px;
    }
    @media (min-width: 375px ){
        height: 800px;
    }
    @media(min-width : 1024px ){
        height: 400px;
    }
    
`;

export const InputsFormContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    height: 40px;
    width: fit-content;
    @media screen and (min-width:320px){
        flex-direction: column;
    }
    @media (min-width: 375px ){
        flex-direction: column;
        width: 70%;
        height: 70px;
    }
    @media(min-width : 1024px){
        width: fit-content;
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const ProdParagraph = styled.p`
    font-size: 15px;
    color: white;
    @media (min-width: 375px ){
        font-size: 18px;
        color: white;
    }
`;
export const InputProd = styled(Field)`
    height: 30px;
    width: 200px;
    outline: none;
    border: 1px solid black;
    border-radius: 2px ;
    padding-left: 5px;
    @media(min-width : 375px){
        font-size: 16px;
    }
`;
export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ButtonCreate = styled.button`
    height: 30px;
    width: 80px;
    border: 1px solid black;
    cursor: pointer;
    background-color: var(--bg-color);
    color: white;
    border-radius: 50px;
    @media (min-width: 375px ){
        font-size: 16px;
        margin-top: 10px;
    };
    @media(min-width: 1024px){
        width: 150px;
        height: 40px;
        font-size: 20px;
    };
`;

export const ButtonInput = styled.input`
    width: 150px;
    @media(min-width : 375px){
        font-size: 16px;
    }
`;

export const reloadWindow = () => {
        window.location.reload()
   
}