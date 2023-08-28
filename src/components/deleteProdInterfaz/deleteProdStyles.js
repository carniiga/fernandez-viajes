import styled from "styled-components"


export const DeleteContainer = styled.div`
        display: ${props => props.hidden ? "none" : "flex"};
        flex-direction: column;
        width: 100%;
        height: 100%;
        z-index: 900;
        justify-content: center;
        align-items: center;
        backdrop-filter: ${props => props.hidden ? "none": "blur(20px)"} ;
        position: ${props => props.hidden ? "relative" : "absolute"};
        top: 0;
        @media(min-width : 375px){
            width: 100%;
            left: 0;
        }
        
`;
export const DeleteProdContainer = styled.div`
    font-family: var(--font);
    width: 60%;
    background-color: white;
    z-index: 333;
    display: ${props => props.hidden ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    top : 100px;
    height: 30%;
    position: absolute;
    @media(min-width : 375px){
        height: 300px;
        width: 100%;
        
    }
  
  
`;

export const DeleteProdTitle = styled.h3`
    font-size: 22px;
    margin-bottom: 30px;
`;

export const DeleteButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 40%;
    height: 80px;
    @media(min-width : 375px){
        width: 100%;
    }
    @media(min-width : 1024px){
        width: 30%;
    }
    

`;

export const ButtonDeleteContainer = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100px;
    height: 30px;
    color: white;
    border-radius: 20px ;
    cursor: pointer;
   
   
    
  
`

export const ButtonaceptContainer = styled.div`
    color: white;
    border: 2px solid var(--bg-color);
    background-color: var(--bg-color);
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 30px;
    border-radius: 20px ;
    cursor: pointer;
`

export const ButtonParagraph = styled.p`
    font-size: 13px;
`;