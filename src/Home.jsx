import React from 'react'
import { ContainerHome, HomeImg } from './styles/HomeStyles'

function Home() {
  return (
    <ContainerHome> {/* Container img */}
      <HomeImg src="/assets/quarto-hotel.png" alt="Imagem hotel" />
    </ContainerHome>
  )
}

export default Home