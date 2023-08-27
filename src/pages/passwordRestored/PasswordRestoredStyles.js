import styled from "styled-components";
import {BsCheckCircle} from "react-icons/bs"
import { RestoreButton } from "../restorePassword/restorePassStyles";

export const RestoredPassWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url("/images/ee856f10084e203efefe7400a92d8d9e.jpg");
    background-position: center ;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const IsokContainer = styled.div`
    backdrop-filter: blur(10px);
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    height: 500px;
`;

export const IsOkIconWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 100px;
    justify-content: center;
    height: 300px;
`;

export const  IsOkIconContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 10px;
`;
export const PassRestoredPh = styled.p`
    font-size: 20px;
    font-family: var(--font);
`;

export const IsOkIcon = styled(BsCheckCircle)`
    color: white;
    background-color: green;
    border-radius: 100px;
    font-size: 50px;
`;
export const PassBtnContainer = styled.div`
    width: 100%;
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
`;

export const PassBtn = styled(RestoreButton)``;



