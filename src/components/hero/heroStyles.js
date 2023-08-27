import styled  from "styled-components"

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
    height: fit-content;
`;

export const HeroTitleH1 = styled.h1`
text-align: center ; 
font-family: Comic Sans MS; 
font-weight:bold; 
font-size: 30px; 
margin-bottom: 30px;
color: #EBD758; 
text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68;
@media(min-width : 1440px){
    margin-top: 50px;
    font-size: 40px;
}
`;

export const HeroProductsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin:  20px auto;
    width: 80%;
    height: fit-content;
    @media screen and (min-width : 375px ){
        width: 80%;
        flex-direction: column;
        align-items: center;  
    }
    @media screen and (min-width : 768px){
        width: 70%;
        justify-content: space-between;
        flex-direction: row;
    }
    @media(min-width: 1024px){
        width: 80%;
        justify-content: space-around;
    }
    @media(min-width : 1440px){
        margin-top: 50px;
    }
`;
export const NextAndPrevContainer = styled.div`
    height: 80px;
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
 
`;
export const ButtonNextContainer = styled.div`
    border: 2px solid var(--bg-color);
    background-color: var(--bg-color);
    border-radius: 50px;
    height: 30px;
    color: white;
    width: 150px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;
export const ButtonParagraph = styled.p`
    font-size:  16px;
    font-family: var(--font);
`;
export const ButtonPrevContainer = styled.div`  
    display: ${props => props.disabled ? "none" : "block"};
    border: 2px solid var(--bg-color);
    background-color: var(--bg-color);
    border-radius: 50px;
    height: 30px;
    color: white;
    width: 150px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;



