
import { useSelector } from 'react-redux'
import HeroCards from '../cardsHero/HeroCards'
import {  ButtonNextContainer, ButtonParagraph, ButtonPrevContainer, HeroContainer, HeroProductsContainer, HeroTitleH1, NextAndPrevContainer} from './heroStyles'
import { useEffect, useState } from 'react'


const Hero =  () => {
  const [page , setPage ] = useState(1)
  const [inicio , setInicio] = useState(0)
  const [final , setFinal] = useState(6)
 

  const products = useSelector(state => state.products.prods)
  const productsChain = products.slice(inicio, final)

  const nextPage = (e) => {
    e.preventDefault()
    setPage(page+1)
    setInicio(inicio + 6)
    setFinal(final + 6)
  }
  const prevPage = (e) => {
    e.preventDefault()
    setPage(page-1)
    setInicio(inicio-6)
    setFinal(final-6)
  }
 
  const promedio = products.length%final;
  return (
   <>
    <HeroContainer>
        <HeroTitleH1>¡Nuestros Viajes!🌴</HeroTitleH1>
        <HeroProductsContainer>
           {productsChain.map((productos)=>(
            <HeroCards {...productos}  key = {productos._id}/>
            
           ) )} 
          
        </HeroProductsContainer>

          
        <NextAndPrevContainer>

          {page <=1 ? (" ") : (<ButtonPrevContainer   onClick={(e) => prevPage(e) }>
          <ButtonParagraph >Pagina previa</ButtonParagraph>
          </ButtonPrevContainer>)}
         {promedio == products.length ? ("") : ( <ButtonNextContainer onClick={(e) => nextPage(e)} >
            <ButtonParagraph >Pagina Siguiente</ButtonParagraph>
          </ButtonNextContainer>)}
        </NextAndPrevContainer>
    </HeroContainer>
   </>
  )
}

export default Hero