import { useSelector } from "react-redux";
import { CardsHeroContainer, DatePackageContainer, DateParagraph, ImgContainer, InformationPackageContainer, PriceCardsHero, PriceContainer, TarifasContainer, TitleCardContainer, TittleCardHero } from "../../components/cardsHero/heroCardsStyles";

import React from 'react'

const CardHeroPage = (props) => {
  const {provincia , lugar , imgUrl , price }= props.props

   
  return (
   <>
   <CardsHeroContainer>
<ImgContainer bgimg = {imgUrl[0]} ></ImgContainer>
<InformationPackageContainer>
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
</CardsHeroContainer>
   </>
  )
}

export default CardHeroPage