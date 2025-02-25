import React from 'react'
import { ContainerAmenidades, ContainerImagemAmenidades, ImagemLazerAmenidades, ImagemPiscinaAmenidades, LiAmenidades, ParagrafoImagemLazer, TituloAmenidades, UlAmenidades } from '../styles/AmenidadesStyles'
import { SubContainer } from '../styles/FooterStyles'

function Amenidades() {
  return (
    <ContainerAmenidades>
        <TituloAmenidades>Amenidades e servicos</TituloAmenidades>
        <ContainerImagemAmenidades>
            <ImagemLazerAmenidades src="/assets/lazer.png" alt="Imagem lazer" />
            <ParagrafoImagemLazer>Venha curtir com sua família no Hotel Ramos. Temos muitas amenidadeees e serviços para deixar sua experiência incrível e extremamente agradável. </ParagrafoImagemLazer>
        </ContainerImagemAmenidades>
        <SubContainer>
            <UlAmenidades>
            <LiAmenidades>Restaurante Premiado</LiAmenidades>
            <LiAmenidades>Spa ee piscina coberta </LiAmenidades>
            <LiAmenidades>Academia e personal trainning</LiAmenidades>
            <LiAmenidades>Salas de reunião</LiAmenidades>
            <LiAmenidades>Serviço de concierge</LiAmenidades>
            <LiAmenidades>Wi-fi gratuito</LiAmenidades>
            <LiAmenidades>Quartos com varandas privadas</LiAmenidades>
            <LiAmenidades>Sweeping city views</LiAmenidades>
            <LiAmenidades>Coleção de belas artes</LiAmenidades>
            <LiAmenidades>Água mineral - cotemplar</LiAmenidades>
            <LiAmenidades>Animas de estimação permitidos</LiAmenidades>
            </UlAmenidades>
            <ImagemPiscinaAmenidades src="/assets/piscina-Amenidades.png" alt="Imagem piscina" />
        </SubContainer>
    </ContainerAmenidades>
  )
}

export default Amenidades