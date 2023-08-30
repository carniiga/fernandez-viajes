import React, { useEffect } from 'react'
import {  ButtonDeleteContainer, ButtonParagraph, ButtonaceptContainer, DeleteButtonContainer, DeleteContainer, DeleteProdContainer, DeleteProdTitle } from './deleteProdStyles'
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from "../../redux/userReducer/userActions"
import { deleteProdById } from '../cardsHero/heroCardsUtils'
import { reloadWindow } from '../../pages/CreateProduct/createProductsStyles'
const DeleteProdMenu = () => {
 
    const hiddenModal = useSelector(state => state.user.hiddenDelete)
    const token = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const id = useSelector(state => state.user.idSelected)
   
    const deleteProd = async(id,e) => {
        e.preventDefault()
    
        console.log(id , id.length)
         const deleteProd = await  deleteProdById(id , token.token)
         dispatch(userActions.deleteProdModal())
         reloadWindow()
       
        
   
}

   
  return (
    <>
    <DeleteContainer hidden = {hiddenModal}>
    <DeleteProdContainer hidden = {hiddenModal}>
        <DeleteProdTitle>¿Estas seguro que queres borrar el producto? </DeleteProdTitle>
        <DeleteButtonContainer>
            <ButtonDeleteContainer>
            <ButtonParagraph onClick={(e) => deleteProd(id,e)}>Quiero Eliminar</ButtonParagraph>
            </ButtonDeleteContainer>
            <ButtonaceptContainer>
            <ButtonParagraph onClick={() => dispatch(userActions.deleteProdModal())}>Me Arrepentí</ButtonParagraph>
            </ButtonaceptContainer>
        </DeleteButtonContainer>
    </DeleteProdContainer>
    </DeleteContainer>
   
    </>
  )
}

export default DeleteProdMenu