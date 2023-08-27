import styled from "styled-components"


export const UpdateProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-image: url("/images/ee856f10084e203efefe7400a92d8d9e.jpg");
    background-position: bottom ;
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: 375px ){
        gap: 50px;
    }
`;
export const UpdateContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    color: black;
    backdrop-filter: blur(20px);
    @media(min-width: 320px){
        flex-direction: column;
        align-items: center;
        height: 100%;
        margin-bottom: 50px;
    }
    @media (min-width: 375px ){
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
    @media(min-width: 1024px){
        flex-direction: row;
    }
`;