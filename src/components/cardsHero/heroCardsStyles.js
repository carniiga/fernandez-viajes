import styled from "styled-components"
import { BsPencil} from "react-icons/bs"
import {BsTrash} from "react-icons/bs"


export const CardsHeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 230px;
    font-family: 'Open Sans', sans-serif;
    @media(min-width: 1440px){
        width: 250px;
    }
    
    
`;
export const TitleCardContainer =styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 80px;
`;


export const ImgContainer = styled.div`
    height: 220px;
    width: 230px;
    background-image: ${props => props.bgimg ? `url(${props.bgimg})` : "none"};
    background-repeat:no-repeat;
    background-size:cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    @media(min-width: 1440px){
        width: 250px;
    }
  
    
`;
export const InformationPackageContainer = styled.div`
cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
    color:white;
    width: 100%;
    height: 300px;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
 
`;
export const TittleCardHero = styled.h3`
    font-size: 25px;
    font-weight: bold 700 ;
    @media(min-width : 1440px){
    font-size: 27px;
 }
`;
export const DatePackageContainer = styled.div`
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const DateParagraph = styled.p`
    font-size: 15px;
    font-weight: 600;
    @media(min-width : 1440px){
    font-size: 18px;
 }
`;
export const PriceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`;
export const PriceCardsHero = styled.p`
    font-size: 30px;
    font-weight: 900;
`;
export const CardSubTitleContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 80%;
    height: 30px;
    margin-bottom:500px;
`;

export const TarifasContainer = styled.div`
    display: flex;
    font-size: 12px;
    color: #c0ddf5;
    width: 100px;
    margin: 10px auto;
    flex-direction: column;
    justify-content: center;
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    border-radius: 40px;
    z-index: 100;
    width: 80px;
    margin-top: 5px;
    margin-left: 140px;
    height: 30px;
    background-color: var(--bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 5px;
    @media(min-width: 1440px){
        width: 100px;
        margin-left: 150px;
        height: 40px;
    }
`;

export const EditIcon = styled(BsPencil)`
 cursor: pointer;
 @media(min-width : 1440px){
    font-size: 20px;
 }
`;

export const DeleteIcon = styled(BsTrash)`
     cursor: pointer;
     @media(min-width : 1440px){
    font-size: 20px;
 }
`;

