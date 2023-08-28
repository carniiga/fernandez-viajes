import { useDispatch, useSelector } from "react-redux";
import { CardsHeroContainer, DatePackageContainer, DateParagraph, ImgContainer, InformationPackageContainer, PriceCardsHero, PriceContainer, TarifasContainer, TitleCardContainer, TittleCardHero } from "../../components/cardsHero/heroCardsStyles";
import React, { useEffect } from 'react'
import * as userActions from "../../redux/userReducer/userActions"

const CardHeroPage = (props) => {
  const {provincia , lugar , imgUrl , price }= props.props
  const userModal = useSelector(state => state.user.hiddenModal)
  const menuHidden = useSelector(state =>  state.user.hiddenMenu)
  const dispatch = useDispatch()
  useEffect(() => {
    if(userModal == false){
      dispatch(userActions.closeUserModal())
    }else if (menuHidden == false){
      dispatch(userActions.hiddenMenu())
    }
  }, [])
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