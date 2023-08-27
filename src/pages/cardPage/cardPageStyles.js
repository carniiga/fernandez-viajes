import { styled } from "styled-components";
import { HeroTitleH1 } from "../../components/hero/heroStyles";
import {BiLogoWhatsapp, BiSolidPlaneAlt} from "react-icons/bi"
import {GiForkKnifeSpoon} from "react-icons/gi"
import {FaBusSimple} from "react-icons/fa6"
import {LiaHotelSolid} from "react-icons/lia"
export const BodyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
    background-image: url("/images/ee856f10084e203efefe7400a92d8d9e.jpg");
    background-position: bottom ;
    background-size: cover;
    background-repeat: no-repeat;
    height: fit-content;
    width: 100%;
  
`;

export const CardAndHeroContainer = styled.div`
  display: flex;
  margin: 0 auto ;
  justify-content: space-between;
  height: fit-content;
  width: 80%;
  backdrop-filter: blur(5px);
  border: 2px dashed red;
  @media(min-width: 320px){
    flex-direction: column;
  }
  @media(min-width : 375px){
    margin-top: 20px;
    flex-direction: column;
    width: 80%;
    align-items: center;
  }
  @media(min-width : 1024px){
    flex-direction: row;
    width: 80%;
    align-items: start;
    justify-content: space-around;
  }

`;

export const DescriptionPackage = styled.div`
  display:flex;
  flex-direction: column;
  width: 70%;
  height: fit-content;
  @media(min-width : 1024px){
    width: 50%;
  }


`;


export const  TitlePackage = styled(HeroTitleH1)`
  font-size: 50px;
  @media(min-width : 375px){
  font-size: 40px;
  }
`
export const DescContainer = styled.div`
  width: 70%;
  background-color: var(--bg-color);
  color: white;
  @media(min-width : 375px){
    width: 100%;
  }

  
`;

export const DescParagraph = styled.p`
  font-family: var(--font);
`;
export const ServicesAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 300px;
  margin-top: 30px;
  border: 2px dashed pink;
  @media screen and (min-width : 320px) {
    flex-direction: column;
    width: 250px;
    height: 700px;
  }
  @media(min-width : 375px){
    flex-direction: column;
    height: 750px;
  }
`;
export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: fit-content;
    width: 30%;
    margin-top: 10px;
    border: 2px dashed red;
    @media(min-width : 320px){
      width: 100%;
    
    }
    @media(min-width : 375px){
      height: 300px;
      justify-content: space-around;
      width: 100%;
    }
`;

export const  LiContainer = styled.div`
  margin-top: 10px;
  align-items: center;
  display: flex;
  height: 30px;
  width: fit-content;
  

`;
export const IconServiceContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 100%;
  background-color: var(--bg-color);
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 25px;
  width: 25px;
  @media(min-width : 375px){
    height: 30px;
    width: 30px;
    }
`
export const IconPlane = styled(BiSolidPlaneAlt)`
  font-size: 25px;
  color: white;
`
export const ServiceParagraph = styled.p`
  font-family: var(--font);
  margin-left: 10px;
  font-size: 12px;
  @media(min-width: 320px){
    font-size: 16px;
  }
  @media(min-width : 375px){
    font-size: 15px;
    }
 
`;

export const IconKnifes = styled(GiForkKnifeSpoon)`
  font-size: 20px;
  color: white;
`;
export const IconBus = styled(FaBusSimple)`
  font-size: 20px;
  color: white;

`;
export const IconHotel = styled(LiaHotelSolid)`
  font-size: 20px;
  color: white;
`;
export const IconWspContainer = styled.div`
   display: flex;
  border: 1px solid white;
  border-radius: 100%;
  background-color:#25d366;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 25px;
  width: 25px;
`;
export const IconWsp = styled(BiLogoWhatsapp)`
   font-size: 20px;
  color: white;
`;
export const DaysAndNightContainer = styled.div`
  display: flex;
  background-color: #7295EB;
  width: fit-content;
  text-align: center;
  align-items: center;
  height: 25px;
  border-radius: 10px;
  padding: 10px;
`;
export const DaysParagraph = styled.p`

`;
export const PriceFinalForPersonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-radius: 10px;
    color: white;
    font-family: var(--font);
    background-color: var(--bg-color);
    @media screen and (min-width: 320px) {
      width: 250px;
      height: 350px;
    }
    @media(min-width : 375px){
      height: 300px;
      width: 100%;
      
    }
`;
export const PriceFinal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  height: 60%;

`;

