import styled from "styled-components"
import { Carousel } from 'react-responsive-carousel';

export const Carrousel = styled(Carousel)`
    font-size: 20px;
    width:  300px;
    height: 600px;
    margin-left: 150px;
    @media(min-width: 320px){
        margin: 20px 0 0 20px;
        height: 500px;
        width: 200px;
    }
  
`