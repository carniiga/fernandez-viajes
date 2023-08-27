import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";


import { CarrouselImg, ImgCarousel, ImgCarouselContainer } from './carousellStyles';
import { Carrousel } from './carousellStyles';



const Carousell = (props) => {
   const {imgUrl , name} = props 
  return (
    <>
     <Carrousel  >
            {imgUrl.map((img) => (
                <div>
                  <img src={img} ></img>
                <p className="legend">{name}</p>
                </div>
            
            ))} 
            </Carrousel>
    </>
  )
}

export default Carousell