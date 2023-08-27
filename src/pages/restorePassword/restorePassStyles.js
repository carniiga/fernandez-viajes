import styled from "styled-components"
import {Form , Field} from "formik"
export const RestoreWrapper = styled.div`
    height: 100%;
    width: 100vw;
    background-image: url("/images/ee856f10084e203efefe7400a92d8d9e.jpg");
    background-position: center ;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
`;

export const RestoreContainer = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 500px;
    font-family: var(--font);
`;
export const RestoreTitleContainer = styled.div`
    height: 80px;
    margin: 20px auto ;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
`;
export const RestoreTitle = styled.h3`
    font-weight:bold; 
    font-size: 30px; 
    color: #EBD758; 
    text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68;
`;
export const RestoreFormContainer = styled(Form)`
    width: 80%;
    margin: 20px auto;
    display : flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    backdrop-filter: blur(5px);
    text-align: center;
    flex-direction: column;
    height: 100%;
`;

export const RestoreInput = styled(Field)`
    width: 200px;
    height: 30px;
    outline: none;
    border-style: none;
    padding-left: 10px;
    border-radius: 20px;
`;

export const RestoreButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 30px;
`;

export const RestoreButton =  styled.button`
    width: 100px;
    height: 30px;
    color: white;
    border-style: none;
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
    background-color: var(--bg-color);
`;
export const RestoreErrorParagraph = styled.p`
    color: red;
    font-weight: 300;
`;