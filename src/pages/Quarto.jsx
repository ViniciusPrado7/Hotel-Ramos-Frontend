import React from 'react'
import {ButtonValor, ContainerQuarto, DivInformacoesQuartos, DivInfoValor, DivQuartos, H2Valor, ImagemQuarto, Liquarto, ParagrafoInfoQuarto, ParagrafoValor, TituloAcomodacao, TituloInfoQuarto, Ulquarto } from '../styles/QuartoStyles'

function Quarto() {
  return (
    <ContainerQuarto>
        <TituloAcomodacao>Nossas Acomodações</TituloAcomodacao>
        <DivQuartos>
            <ImagemQuarto src='/assets/quarto-casal.jpg' alt='Imagem quarto casal'/> 
            <DivInformacoesQuartos>
            <TituloInfoQuarto> Quarto de casal </TituloInfoQuarto>
            <ParagrafoInfoQuarto> Nossos quartos de casal oferecem vistas panorâmicas do mar.</ParagrafoInfoQuarto>
            <Ulquarto>
                <Liquarto>Tamanho 150 m²</Liquarto>
                <Liquarto>Camas: 1 Casal</Liquarto>
            </Ulquarto>
            </DivInformacoesQuartos>
            <DivInfoValor>
              <H2Valor> A partir de</H2Valor>
              <ParagrafoValor> R$: 800</ParagrafoValor>
              <ButtonValor> Mais informações</ButtonValor>
            </DivInfoValor>
        </DivQuartos>

        <DivQuartos>
            <ImagemQuarto src='/assets/quarto-luxo.jpg' alt='Imagem quarto luxo'/> 
            <DivInformacoesQuartos>
            <TituloInfoQuarto> Quarto de luxo </TituloInfoQuarto>
            <ParagrafoInfoQuarto> Nossos quartos luxo ofereecem vistas panorâmicas do mar e um conforto incrível.</ParagrafoInfoQuarto>
            <Ulquarto>
                <Liquarto>Tamanho 340 m²</Liquarto>
                <Liquarto>Camas: 3 Casal</Liquarto>
            </Ulquarto>
            </DivInformacoesQuartos>
            <DivInfoValor>
              <H2Valor> A partir de</H2Valor>
              <ParagrafoValor> R$: 2500</ParagrafoValor>
              <ButtonValor> Mais informações</ButtonValor>
            </DivInfoValor>
        </DivQuartos>

        <DivQuartos>
            <ImagemQuarto src='/assets/quarto-solteiro.jpg' alt='Imagem quarto solteiro'/> 
            <DivInformacoesQuartos>
            <TituloInfoQuarto> Quarto de solteiro</TituloInfoQuarto>
            <ParagrafoInfoQuarto> Nossos quartos solteiro oferecem uma estadia tranquila com grande conforto.</ParagrafoInfoQuarto>
            <Ulquarto>
                <Liquarto>Tamanho 80 m²</Liquarto>
                <Liquarto>Camas: 1 solteiro</Liquarto>
            </Ulquarto>
            </DivInformacoesQuartos>
            <DivInfoValor>
              <H2Valor> A partir de</H2Valor>
              <ParagrafoValor> R$: 400</ParagrafoValor>
              <ButtonValor> Mais informações</ButtonValor>
            </DivInfoValor>
        </DivQuartos>

    </ContainerQuarto>
  )
}

export default Quarto
