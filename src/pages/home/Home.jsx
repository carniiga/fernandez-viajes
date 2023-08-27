import React, { useEffect } from 'react'

import { Navbar } from '../../components/navbar/navbar'
import Hero from '../../components/hero/Hero'
import { HomeContainer } from './HomeStyles'
import { useDispatch, useSelector } from 'react-redux'
import UserModal from '../../components/UserModal/UserModal'
import Footer from '../../components/footer/Footer'

import * as userActions from "../../redux/userReducer/userActions"
const Home = () => {
  const  dispatch = useDispatch()
  const userModal = useSelector(state => state.user.hiddenModal)
  useEffect(() => {
    if(userModal == false){
      dispatch(userActions.closeUserModal())
    }
  }, [])
  return (
    <>
    <HomeContainer >
    <Navbar/>
    <UserModal/>
    <Hero />
    <Footer/>
    </HomeContainer>
    
   
    </>
  )
}

export default Home