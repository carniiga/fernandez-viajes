import React from 'react'
import { ButtonUpdate, FormUpdateContainer, InputUpdate, InputUpdateContainer, InputsUpdateContainer, UpdateTitle } from './FormUpdateStyles'
import { DateParagraph } from '../../../components/cardsHero/heroCardsStyles'
import {  Formik } from 'formik'
import { useSelector } from 'react-redux'
import { UpdateProd } from './UpdateProdFetch'
import { useNavigate } from 'react-router-dom'
import { reloadWindow } from '../../CreateProduct/createProductsStyles'
const FormUpdate = (props) => {
    const {lugar, provincia ,   price , hotel  , totalQuantity , imgUrl, _id} = props
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
  return (
   <>
   <Formik
    initialValues={{
      provincia : provincia,
      lugar : lugar, 
      price : price  ,
      hotel : hotel ,
      imgUrl :imgUrl,
      totalQuantity : totalQuantity
    }}
   
   
    onSubmit={ async values => {
      
        await UpdateProd(values, user.token , _id)
        navigate("/")
        reloadWindow()
   
    }}
   >
   <FormUpdateContainer>
    <UpdateTitle>Actualiza el Producto</UpdateTitle>
    <InputsUpdateContainer>
    <InputUpdateContainer>
    <DateParagraph>Provincia</DateParagraph>
    <InputUpdate  name = "provincia">
      
    </InputUpdate>
    </InputUpdateContainer>
    <InputUpdateContainer>
    <DateParagraph>Lugar</DateParagraph>
    <InputUpdate name = "lugar"  placeholder= "lugar">
    </InputUpdate>
    </InputUpdateContainer>
    <InputUpdateContainer>
    <DateParagraph>Precio</DateParagraph>
    <InputUpdate  name = "price" type = "number"  placeholder= {`$${price}`}>
    </InputUpdate>
    </InputUpdateContainer>
    <InputUpdateContainer>
    <DateParagraph>Hotel</DateParagraph>
    <InputUpdate  name = "hotel" placeholder="hotel">
    </InputUpdate>
    </InputUpdateContainer>
    <InputUpdateContainer>
    <DateParagraph>Cant Disponible</DateParagraph>
    <InputUpdate name = "quantity"  placeholder= "cantidad disponible">
    </InputUpdate>
    </InputUpdateContainer>
    </InputsUpdateContainer>
    <ButtonUpdate type='submit'>Actualizar</ButtonUpdate>
   </FormUpdateContainer>
   </Formik>
   </>
  )
}

export default FormUpdate