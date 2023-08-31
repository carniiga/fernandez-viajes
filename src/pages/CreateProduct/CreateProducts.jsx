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
  //accedemos al token para poder crear el producto. 
  let [images, setImages] = useState([]); //creamos  un estado de  array para almacenar las imagenes que el admin quiera cargar. 
  const navigate = useNavigate()
  const imageToUrl = (e) => {
    //esta funcion se encarga de poder leer el archivo seleccionado de forma local para poder usarlo en la web, por medio de una Url 
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (e) => {
      setImages((current) => [...current, e.target.result]);
    };
    reader.readAsDataURL(file);

    //El readAsDataURL()método devuelve un objeto con la resultpropiedad que contiene los datos como archivo data: URL. Representa data:URLlos datos del archivo como una cadena codificada en base64 Por ejemplo, puede utilizar readAsDataURL()para leer una imagen y mostrar su cadena codificada en base64 en una página web.


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
            //una vez que se ingresen los datos en los campos se llama a una funcion que se encarga de la peticion "POST". se  le envia a la pagina home con una actualizacion de la app y que se vean los cambios. 
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
