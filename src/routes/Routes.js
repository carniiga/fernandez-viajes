import CardPage from '../pages/cardPage/HeroCardPage'
import Home from '../pages/home/Home'
import {Route, Routes as ReactDomRoutes }from "react-router-dom"


import React from 'react'
import Register from '../pages/RegisterPage/Register'
import Login from '../pages/login/Login'
import CreateProducts from '../pages/CreateProduct/CreateProducts'
import {  useSelector } from 'react-redux'
import UpdateProd from '../pages/updateProduct/UpdateProd'
import ForgotPassword from '../pages/forgotPassword/ForgotPassword'
import RestorePassword from '../pages/restorePassword/RestorePassword'

import EmailSent from '../pages/emailSent/EmailSent'
import PasswordRestored from '../pages/passwordRestored/PasswordRestored'
const Routes = () => {
  const user = useSelector(state => state.user.user)

 
  
  return (
    <>
     <ReactDomRoutes>
      <Route path="/" element={<Home/>} />
      <Route path="/cardInfo/:id" element={<CardPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path ="/restore-password/:userId" element = {<RestorePassword/>}></Route>
      <Route path ="/forgot-password" element = {<ForgotPassword/>}></Route>
      <Route path = "/emailSent/:email" element = {<EmailSent/>}></Route>
      <Route path = "/passwordRestored" element ={<PasswordRestored/>}></Route>

      {user  && user.rol[0] === "admin" ? (
      <Route path="/createProd" element={<CreateProducts/>} />
      ) : null}
       {user  && user.rol[0] === "admin" ? (
      <Route path="/updateProduct/:id" element={<UpdateProd/>} />
      ) : null}
  
     

    </ReactDomRoutes>
    </>

   
      
 
  )
}

export default Routes