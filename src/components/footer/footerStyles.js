import styled from "styled-components"


export const FooterContainer = styled.div`
    height: 100px;
    backdrop-filter: blur(50px);
    width: 100%;
    @media(min-width : 320px){
        height: 300px;
    }
    @media(min-width: 375px){
        height: 300px;
    }
    @media(min-width : 1024px){
        height: 200px;
    }
`;

export const FooterUlContainer = styled.div`
     font-family: var(--font);  
    height: 100px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    @media(min-width: 375px){
        height: 300px;
    }
    @media(min-width : 1024px){
        height: 200px;
    }
`;
export const FooterUl = styled.ul`
        height: 30px;
        margin: 5px auto;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 10px;
        @media(min-width : 320px){
            flex-direction: column;
            align-items: center;
            height: fit-content;
        }
        @media(min-width: 375px){
        height: 250px;
        align-items: center;
        flex-direction: column;
        @media(min-width: 1024px){
            flex-direction: row;
            width: 100%;
            height: 100px;
        }
    }

`;

export const FooterLi = styled.li`
    list-style: none;
    font-size: 13px;
    cursor: pointer;
    @media(min-width: 1440px){
        font-size: 16px;
    }
`;
export const CopyAndDirectionContainer = styled.div`
     margin:10px 20px ;
     display: flex;
     flex-direction: column;
    height: 50px;
    width: 300px;
   
`

export const FooterParagraph = styled.p`
    font-size: 12px;

`
