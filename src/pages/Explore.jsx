import React from 'react'
import { ContainerExplore, ExploreImg, ExploreImgs, ExploreImgTxt, ExploreTxt } from '../styles/ExploreStyles'

function Explore() {
    return (
        <ContainerExplore>
            <ExploreImgTxt> {/* Container img com txt row */}
                <ExploreImg src="/assets/almoço-frutos-do-mar 1.png" alt="Imagem almoço frutos do mar" />
                <ExploreTxt>No Hotel Rameira, possuímos quartos de incrível qualidade além de almoço e café saborosos. Venha já conhecer. Entre em contato via email ou ligue para o número 0-800-000-0000.</ExploreTxt>
            </ExploreImgTxt>
            <ExploreImgs> {/* Container imgs row */}
                <ExploreImg src="/assets/area-piscina 1.png" alt="Foto da área da piscina" />
                <ExploreImg src="/assets/quarto-de-luxo 1.png" alt="Foto do quarto de luxo" />
            </ExploreImgs>

            <ExploreImgs> {/* Container imgs row */}
                <ExploreImg src="/assets/quarto-casal 1.png" alt="Foto do quarto de casal" />
                <ExploreImg src="/assets/café-hotel 1.png" alt="Foto do café do hotel" />
            </ExploreImgs>
        </ContainerExplore>
    )
}

export default Explore