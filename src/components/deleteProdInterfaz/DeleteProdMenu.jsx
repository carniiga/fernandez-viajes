import React, { useEffect } from 'react'
import {  ButtonDeleteContainer, ButtonParagraph, ButtonaceptContainer, DeleteButtonContainer, DeleteContainer, DeleteProdContainer, DeleteProdTitle } from './deleteProdStyles'
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from "../../redux/userReducer/userActions"
import { deleteProdById } from '../cardsHero/heroCardsUtils'
import { reloadWindow } from '../../pages/CreateProduct/createProductsStyles'
const DeleteProdMenu = () => {
 
    const menuDelete = useSelector(state => state.user.hiddenDelete) //accedemos al estado para mostrar el menu de  eliminar el producto. 
    const token = useSelector(state => state.user.user) //accedemos al token del usuario para poder  realizar acciones sobre los productos. en este caso es para elimiarlo de la base de datos.
    const dispatch = useDispatch()
    const id = useSelector(state => state.user.idSelected) //accedemos al id del producto seleccionado
   
    const deleteProd = async(id,e) => {
        e.preventDefault()
        // esta funcion se encarga de llamar a una funcion que creamos para poder hacer la peticion "DELETE" para eliminar el producto. cuando se elimina el producto se cierra el menu para eliminar el producto y se hace un refresco de ventana automaticamente para que se actulice el producto en el home.         
         const deleteProd = await  deleteProdById(id , token.token)
         dispatch(userActions.deleteProdModal())
         reloadWindow()
       
        
   
}

   
  return (
    <>
    <DeleteContainer hidden = {menuDelete}>
    <DeleteProdContainer hidden = {menuDelete}>
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