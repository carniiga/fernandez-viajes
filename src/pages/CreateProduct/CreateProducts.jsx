import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import UserModal from "../../components/UserModal/UserModal";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../redux/userReducer/userActions";
import Footer from "../../components/footer/Footer"
import {
  ButtonContainer,
  ButtonCreate,
  ButtonInput,
  CreateProdWrapper,
  CreateProdsContainer,
  FormCreateContainer,
  InputProd,
  InputsFormContainer,
  ProdParagraph,
  TitleContainer,
  TitleCreateProd,
  reloadWindow,
} from "./createProductsStyles";
import { Formik } from "formik";
import { postProducts } from "./createProdsUtils";
import { useNavigate } from "react-router-dom";

const CreateProducts = () => {
  const token = useSelector((state) => state.user.user.token);
  let [images, setImages] = useState([]);
  const navigate = useNavigate()
  const imageToUrl = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (e) => {
      setImages((current) => [...current, e.target.result]);
    };
    reader.readAsDataURL(file);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.closeUserModal());
  }, []);
  return (
    <>
    <CreateProdWrapper>
      <Navbar />
      <UserModal />
      <CreateProdsContainer>
        <TitleContainer>
          <TitleCreateProd>Carga el proximo Paquete👇</TitleCreateProd>
        </TitleContainer>
        <Formik
          initialValues={{
            provincia: "",
            lugar: "",
            hotel: "",
            precio: "",
            cantidadDisponible: "",
            descripcion: "",
          }}
          onSubmit={async (values) => {
            const createProd = await postProducts(values, images, token);
             navigate("/")
             reloadWindow()
            
           

          }}
        >
          <FormCreateContainer>
            <InputsFormContainer>
              <ProdParagraph>Provincia :</ProdParagraph>
              <InputProd name="provincia"></InputProd>
            </InputsFormContainer>
            <InputsFormContainer>
              <ProdParagraph>Lugar :</ProdParagraph>
              <InputProd name="lugar"></InputProd>
            </InputsFormContainer>
            <InputsFormContainer>
              <ProdParagraph>Hotel :</ProdParagraph>
              <InputProd name="hotel"></InputProd>
            </InputsFormContainer>
            <InputsFormContainer>
              <ProdParagraph>Imagenes</ProdParagraph>
              <ButtonInput
                type="file"
                multiple
                onChange={imageToUrl}
              ></ButtonInput>
            </InputsFormContainer>
            <InputsFormContainer>
              <ProdParagraph>Precio:</ProdParagraph>
              <InputProd name="precio"></InputProd>
            </InputsFormContainer>
            <InputsFormContainer>
              <ProdParagraph>Cantidad disponible :</ProdParagraph>
              <InputProd name="cantidadDisponible"></InputProd>
            </InputsFormContainer>
            <InputsFormContainer>
              <ProdParagraph>Descripcion :</ProdParagraph>
              <InputProd name="descripcion"></InputProd>
            </InputsFormContainer>
            <ButtonContainer>
              <ButtonCreate type="submit">crear</ButtonCreate>
            </ButtonContainer>
          </FormCreateContainer>
        </Formik>
      </CreateProdsContainer>
       <Footer>
        
       </Footer>
        </CreateProdWrapper>
    </>
  );
};

export default CreateProducts;
