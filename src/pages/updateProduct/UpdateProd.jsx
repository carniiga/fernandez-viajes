import React, { useEffect } from 'react'
import { Navbar } from '../../components/navbar/navbar'
import UserModal from '../../components/UserModal/UserModal'
import { useParams } from 'react-router-dom'
import { UpdateContainer, UpdateProductWrapper } from './updateProdStyles'
import { CardsHeroContainer, DatePackageContainer, DateParagraph, ImgContainer, InformationPackageContainer, PriceContainer, TarifasContainer, TitleCardContainer, TittleCardHero } from '../../components/cardsHero/heroCardsStyles'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdate from './FormUpdate/FormUpdate'
import * as userActions from "../../redux/userReducer/userActions"
import Footer from "../../components/footer/Footer"
const UpdateProd = () => {
    const {id} = useParams()
    const products = useSelector(state => state.products.prods)
    const findProd =  products.find((prod => prod._id == id))
    const {_id , lugar , provincia , description , imgUrl , price , } = findProd
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
    <UpdateProductWrapper>
    <Navbar/>
    <UserModal/>
    <UpdateContainer>
      <CardsHeroContainer>
      <ImgContainer bgimg = {findProd.imgUrl[0]}></ImgContainer>
         <InformationPackageContainer>
          <TitleCardContainer>
           <TittleCardHero>{provincia}</TittleCardHero>
           <DateParagraph>{lugar}</DateParagraph>
          </TitleCardContainer>
          <DatePackageContainer>
            <DateParagraph>Agosto 2023</DateParagraph>
          </DatePackageContainer>
          <PriceContainer>${price}</PriceContainer>
          <TarifasContainer>
          Tarifa por persona en Base triple/cuadruple + tasas e impuestos
          </TarifasContainer>
         </InformationPackageContainer>
      </CardsHeroContainer>
        <FormUpdate {...findProd}/>
    </UpdateContainer>
    <Footer></Footer>
    </UpdateProductWrapper>



    </>
  )
}

export default UpdateProd