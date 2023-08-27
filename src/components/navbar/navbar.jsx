import React from 'react'
import { BurgerIcon, IconBurgerContainer, IconUserContainer, ItemUl, ItemsContainer, ItemsLINavbar, LogoContainer, LogoNavbar, NavbarContainer, UserIcon } from './navbarStyles'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from "../../redux/userReducer/userActions"
export const Navbar = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const modalUser = useSelector(state => state.user.hiddenModal)
  const menuHidden = useSelector(state => state.user.hiddenMenu)
 

  return (
    <NavbarContainer>
        <LogoContainer onClick={() => navigate("/")}>
          <LogoNavbar src='/images/Fernandez viajes.png'></LogoNavbar>
        </LogoContainer>
        <ItemsContainer >
        <IconBurgerContainer>        
          <BurgerIcon onClick={() =>  dispatch(userActions.hiddenMenu())}/>
        </IconBurgerContainer>
            <ItemUl hidden ={menuHidden}>
                <ItemsLINavbar>Sobre Nosotros</ItemsLINavbar>
                <ItemsLINavbar>Contactanos</ItemsLINavbar>
                {user ? (<IconUserContainer>
                  <UserIcon onClick={() => dispatch(userActions.openUserModal())}/>
                </IconUserContainer>) :  (<ItemsLINavbar onClick={() => navigate("/register")}>Registrate</ItemsLINavbar>)}
              
            </ItemUl>
            
        </ItemsContainer>
    </NavbarContainer>
  )
}

