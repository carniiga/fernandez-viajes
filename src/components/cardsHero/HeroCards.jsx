import React from "react";
import {
  ButtonsContainer,
  CardsHeroContainer,
  DatePackageContainer,
  DateParagraph,
  DeleteIcon,
  EditIcon,
  ImgContainer,
  InformationPackageContainer,
  PriceCardsHero,
  PriceContainer,
  TarifasContainer,
  TitleCardContainer,
  TittleCardHero,
} from "./heroCardsStyles";
import { useNavigate } from "react-router-dom";

import { deleteProdById } from "./heroCardsUtils";
import { useDispatch, useSelector } from "react-redux";
import { reloadWindow } from "../../pages/CreateProduct/createProductsStyles";
import DeleteProdMenu from "../deleteProdInterfaz/DeleteProdMenu"
import * as userActions from "../../redux/userReducer/userActions"

const HeroCards = (props) => {
  const { provincia , lugar , price, imgUrl, _id  } = props;
  const navigate= useNavigate()
  const user = useSelector(state => state.user.user)
 
  const dispatch = useDispatch()
 
  return (
    <>
    
      <CardsHeroContainer>
        {user && user.rol[0]  === "admin" ? (
          <ButtonsContainer>
          <EditIcon onClick={() => navigate(`/updateProduct/${_id}`)} />
          <DeleteIcon onClick={() => dispatch(userActions.deleteProdModal())}/>
        </ButtonsContainer>
        ) : (null)}
        <ImgContainer bgimg={imgUrl[0]}></ImgContainer>
        <InformationPackageContainer onClick={()=> navigate(`/cardInfo/${_id}`)}>
          <TitleCardContainer>
            <TittleCardHero>{provincia}</TittleCardHero>
            <DateParagraph>{lugar}</DateParagraph>
          </TitleCardContainer>
         
          <DatePackageContainer>
            <DateParagraph>Agosto 2023</DateParagraph>
          </DatePackageContainer>

          <PriceContainer>
            <PriceCardsHero>${price}</PriceCardsHero>
          </PriceContainer>

          <TarifasContainer>
            Tarifa por persona en Base triple/cuadruple + tasas e impuestos
          </TarifasContainer>
        </InformationPackageContainer>
        <DeleteProdMenu id = {_id}/>
      </CardsHeroContainer>
        
    </>
  );
};

export default HeroCards;
