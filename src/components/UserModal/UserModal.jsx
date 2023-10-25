import React from 'react'
import { ButtonClose, ButtonCloseModal, ButtonCloseModalContainer, UserInfoContainer, UserItemLi, UserItemsUl, UserModalContainer, UserNameContainer, UserNameSpan, UserParagraph } from './UserModalStyles'
import {  useDispatch, useSelector } from 'react-redux'
import * as userActions from "../../redux/userReducer/userActions"
import { Navigate, useNavigate } from 'react-router-dom'

const UserModal = () => {
    const hidden = useSelector(state => state.user.hiddenModal) //este es el userModal para el usuario. 
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    
  return (
    <>
    {user ? (<UserModalContainer hidden={hidden ? "none" : "flex"}>
        {/* si hay usuario   y si le hace click al modal se abre .  */}
        <ButtonCloseModalContainer >
        <ButtonClose onClick={() => dispatch(userActions.closeUserModal())} >X</ButtonClose>
        </ButtonCloseModalContainer>
        <UserInfoContainer>
            <UserNameContainer>
                <UserParagraph>Bienvenido <UserNameSpan>{user.userName}</UserNameSpan>! </UserParagraph>
            </UserNameContainer>
            { user &&  user.rol[0]  === "admin"? (
            
            // aca se verifica si el usuario logeado tiene rol de admin ya que la app está enfocada solamente al admin. y si es asi se le muestra la opcion para cargar productos nuevos desde el front
                <UserItemsUl>
               
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