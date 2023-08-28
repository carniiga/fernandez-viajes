import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import {
  BodyCardContainer,
  CardAndHeroContainer,
  DaysAndNightContainer,
  DaysParagraph,
  DescContainer,
  DescParagraph,
  DescriptionPackage,
  IconBus,
  IconHotel,
  IconKnifes,
  IconPlane,
  IconServiceContainer,
  IconWsp,
  IconWspContainer,
  LiContainer,
  PriceFinal,
  PriceFinalForPersonContainer,
  ServiceParagraph,
  ServicesAndPriceContainer,
  ServicesContainer,
  TitlePackage,
  TitlePackageContainer,
} from "./cardPageStyles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CardHeroPage from "./CardHeroPage";
import Carousell from "../../components/carrousells/Carousell";
import {
  PriceCardsHero,
  TittleCardHero,
} from "../../components/cardsHero/heroCardsStyles";
import Footer from "../../components/footer/Footer"
import UserModal from "../../components/UserModal/UserModal";
const CardPage = () => {
  const params = useParams();
  const products = useSelector(state => state.products.prods);
  const findProd = products.find((prod) => {
    if (products) {
      return prod._id == params.id;
    }
  });
  const { name, price, description, provincia, imgUrl , hotel } = findProd;
 

  return (
    <>
      <BodyCardContainer>
        <Navbar />
        <UserModal/>
        <CardAndHeroContainer>
          <CardHeroPage props={findProd} />
          <DescriptionPackage>
            <Carousell imgUrl={imgUrl} name={name} />
            <DescContainer>
              <DescParagraph>{description}</DescParagraph>
            </DescContainer>
            <ServicesAndPriceContainer>
              <ServicesContainer>
                <LiContainer>
                  <IconServiceContainer>
                    <IconPlane />
                  </IconServiceContainer>
                  <ServiceParagraph>Aerolineas Argentinas</ServiceParagraph>
                </LiContainer>
                <LiContainer>
                  <IconServiceContainer>
                    <IconKnifes />
                  </IconServiceContainer>
                  <ServiceParagraph>Pension completa</ServiceParagraph>
                </LiContainer>
                <LiContainer>
                  <IconServiceContainer>
                    <IconBus />
                  </IconServiceContainer>
                  <ServiceParagraph>Bus-Semi Cama</ServiceParagraph>
                </LiContainer>
                <LiContainer>
                  <IconServiceContainer>
                    <IconHotel />
                  </IconServiceContainer>
                  <ServiceParagraph>{hotel}</ServiceParagraph>
                </LiContainer>
                <LiContainer>
                  <IconWspContainer>
                    <IconWsp />
                  </IconWspContainer>
                  <ServiceParagraph target="_blank"  href="https://wa.me/+541144078497">¡Consultanos al WhatsApp!</ServiceParagraph>
                </LiContainer>
              </ServicesContainer>
              <PriceFinalForPersonContainer>
                <DaysAndNightContainer>
                  <DaysParagraph>5 dias - 3 noches</DaysParagraph>
                </DaysAndNightContainer>
                <PriceFinal>
                  <TittleCardHero>Precio final por persona </TittleCardHero>
                  <PriceCardsHero> ${price}</PriceCardsHero>
                  <DescParagraph>
                    Tarifa por persona en Base triple/cuadruple + tasas e
                    impuestos
                  </DescParagraph>
                </PriceFinal>
              </PriceFinalForPersonContainer>
            </ServicesAndPriceContainer>
          </DescriptionPackage>
        </CardAndHeroContainer>
        <Footer></Footer>
      </BodyCardContainer>
    </>
  );
};

export default CardPage;
