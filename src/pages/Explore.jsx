import React from 'react'
import { ContainerExplore, DivImagensExplore, ImagemAlmoco, ImagensExplore, ParagrafoAlmoco, SubContainerExplore } from '../styles/ExploreStyles'

function Explore() {
  return (
    <ContainerExplore>
        <SubContainerExplore>
        <ImagemAlmoco src="/assets/almoco.png" alt="Imagem almoço" />
        <ParagrafoAlmoco> No Hotel Rameira, possuímos quartos de incrível qualidade além de almoço e café saborosos.
             Venha já conhecer. Entre em contato via email ou ligue para o número 0-800-0000</ParagrafoAlmoco>
        </SubContainerExplore>
        <DivImagensExplore>
            <ImagensExplore src='/assets/piscina.jpg' alt='Imagem piscina'/>
            <ImagensExplore src='/assets/quarto-luxo.jpg' alt='Imagem quarto luxo'/>
        </DivImagensExplore>
        <DivImagensExplore>
            <ImagensExplore src='/assets/quarto-casal.jpg' alt='Imagem quarto casal'/>
            <ImagensExplore src='/assets/cafe.png' alt=' Imagem café'/>
        </DivImagensExplore>
    </ContainerExplore>
  )
}

export default Explore