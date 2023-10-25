import React from 'react'
import { BurgerIcon, CreateProdBtn, IconBurgerContainer, IconUserContainer, ItemUl, ItemsContainer, ItemsLINavbar, LogoContainer, LogoNavbar, NavbarContainer, UserIcon } from './navbarStyles'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from "../../redux/userReducer/userActions"
export const Navbar = () => {
  const navigate = useNavigate() 
  const user = useSelector(state => state.user.user) //accedemos a la informacion del usuario logeado.
  const dispatch = useDispatch()
  const modalUser = useSelector(state => state.user.hiddenModal) //este es el modal del user . inicia en true. osea oculto 
  const menuHidden = useSelector(state => state.user.hiddenMenu) // este es el menu responsive. inicia en true osea oculto.
 

  return (
    <NavbarContainer>
        <LogoContainer onClick={() => navigate("/")}>
          <LogoNavbar src='/images/Fernandez viajes.png'></LogoNavbar>
        </LogoContainer>
        <ItemsContainer  hidden = {menuHidden}>
        <IconBurgerContainer>        
          <BurgerIcon onClick={() =>  dispatch(userActions.hiddenMenu())}/>
        </IconBurgerContainer>
            <ItemUl hidden ={menuHidden}>
            {user?.rol == "admin"? (
                    <CreateProdBtn onClick={() => navigate("/createProd")} >Cargar Paquete</CreateProdBtn>
                  ) : (null)}
                <ItemsLINavbar href="https://wa.me/+541144078497?text=¡hola!.Vengo desde la App Me gustaria tener mas informacion sobre los viajes ." target='_blank'>Contactanos</ItemsLINavbar>
               
                  
                {user ? (<IconUserContainer>
                  <UserIcon onClick={() => dispatch(userActions.openUserModal())}/>
  
                 {/* si hay usuario logeado se muestra el icono del user para utilizar el modal (por el momento el usuario comun no tiene ninguna accion sobre la aplicacion. ) */}
                </IconUserContainer>) :  (<ItemsLINavbar onClick={() => navigate("/register")}>Registrate</ItemsLINavbar>)}
                
              
            </ItemUl>
            
        </ItemsContainer>
    </NavbarContainer>
  )
}

