import React from 'react'
import {  IsOkIcon, IsOkIconContainer, IsOkIconWrapper, IsokContainer, PassBtn, PassBtnContainer, PassRestoredPh, RestoredPassWrapper } from './PasswordRestoredStyles'

import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'

const PasswordRestored = () => {
    const navigate = useNavigate()
    // esta seccion solo se encarga de mostrar un mensaje de exito que se restablecio la contraseña. 
  return (
   <>
   <RestoredPassWrapper>
    <IsokContainer>
    <IsOkIconWrapper>
        <IsOkIconContainer>
            <IsOkIcon/>
            <PassRestoredPh>Contraseña restablecida con exito</PassRestoredPh>
            <PassBtnContainer>
                <PassBtn onClick={() => navigate("/login")}>Inicia Sesión</PassBtn>
            </PassBtnContainer>
        </IsOkIconContainer>
    </IsOkIconWrapper>

    </IsokContainer>
    <Footer/>
   </RestoredPassWrapper>
   </>
  )
}

export default PasswordRestored