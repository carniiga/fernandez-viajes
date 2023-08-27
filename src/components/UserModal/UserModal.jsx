import React from 'react'
import { ButtonClose, ButtonCloseModal, ButtonCloseModalContainer, UserInfoContainer, UserItemLi, UserItemsUl, UserModalContainer, UserNameContainer, UserNameSpan, UserParagraph } from './UserModalStyles'
import {  useDispatch, useSelector } from 'react-redux'
import * as userActions from "../../redux/userReducer/userActions"
import { Navigate, useNavigate } from 'react-router-dom'

const UserModal = () => {
    const hidden = useSelector(state => state.user.hiddenModal)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    
  return (
    <>
    {user ? (<UserModalContainer hidden={hidden ? "none" : "flex"}>
        <ButtonCloseModalContainer >
        <ButtonClose onClick={() => dispatch(userActions.closeUserModal())} >X</ButtonClose>
        </ButtonCloseModalContainer>
        <UserInfoContainer>
            <UserNameContainer>
                <UserParagraph>Bienvenido <UserNameSpan>{user.userName}</UserNameSpan>! </UserParagraph>
            </UserNameContainer>
            { user &&  user.rol[0]  === "admin"? (
                <UserItemsUl>
                <UserItemLi onClick={() => navigate("/createProd")}>Cargar Productos</UserItemLi>
                <UserItemLi onClick={() => dispatch(userActions.userLogout())}>Cerrar Sesion</UserItemLi>
                </UserItemsUl>
            ) : (
                <UserItemsUl>
                <UserItemLi onClick={() => dispatch(userActions.userLogout())}>Cerrar Sesion</UserItemLi>
                </UserItemsUl>
            )}
        </UserInfoContainer>
     </UserModalContainer>) : (null)}
    </>
  )
}

export default UserModal