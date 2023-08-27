import styled from "styled-components"


export const EmailSentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url("/images/ee856f10084e203efefe7400a92d8d9e.jpg");
    background-position: bottom ;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100vw;
   
   
`;

export const EmailSentContainer = styled.div`
    font-family: var(--font);
    width: 98%;
    margin: 50px auto;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);

`;

export const SentEmailPGContainer = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
`;



export const SentEmailPh = styled.p`
    font-size: 20px;
    color: var(--text-color);
    text-shadow: var(--text-shadow);
`;

export const ButtonSentHome = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonHome = styled.button`
    width: 150px;
    margin-top: 20px;
    border-style: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    background-color: var(--bg-color);
    color: white;
    font-size: 16px;
    align-items: center;
    height: 30px;
    cursor: pointer;
`;

