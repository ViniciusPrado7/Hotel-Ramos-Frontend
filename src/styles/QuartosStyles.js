import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerQuartos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    @media (min-width: 360px) and (max-width: 430px){
        margin: 2rem 1rem 0rem 1rem;
    };

    @media (min-width: 431px) and (max-width: 599px) {
        margin: 2rem 1rem 0rem 1rem;
    }
`
export const TituloQuartos = styled.p`
    font-size: 1.2rem;
    opacity: .5;
    font-style: italic;
    width: 66.5%;

    @media (min-width: 360px) and (max-width: 430px){
        font-size: 1rem;
    };

     @media (min-width: 600px) and (max-width: 800px) {
        width: 80%;
    }

     @media (min-width: 801px) and (max-width: 1250px) {
        width: 80%;
    }

     @media (min-width: 1251px) and (max-width: 1600px) {
        width: 66%;
    }
`
export const SubcontainerQuartos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #000000;
    width: 66.5%;
    padding: 1rem 0;
    justify-content: space-between;

    @media (min-width: 600px) and (max-width: 800px) {
        width: 80%;
        gap: 2rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 80%;
        gap: 2rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 66%;
        gap: 2rem;
    }
`
export const TxtQuartos = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;
    opacity: .5;

    @media (min-width: 360px) and (max-width: 430px){
        font-size: .8rem;
        margin: 0.5rem 0;
    };

    @media (min-width: 600px) and (max-width: 800px) {
        font-size: .7rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        font-size: .9rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        font-size: 1rem;
    }
`
export const ContainerTxtQuartos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;

    > ${TxtQuartos} + ${TxtQuartos} {
        margin-top: 1rem;
    }
`
export const ListaQuartos = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 25px;
`
export const ItemListaQuartos = styled.li`
    opacity: .5;

    @media (min-width: 360px) and (max-width: 430px){
        font-size: .8rem;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        font-size: .7rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        font-size: .9rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        font-size: 1rem;
    }
`
export const ContainerPrecoQuartos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    gap: 1rem;
`
export const LinkMaisInfoQuartos = styled(Link)`
`
export const BotaoMaisInfoQuartos = styled.button`
    width: 185px;
    padding: .7rem;
    background: #000000;
    color: #FFFFFF;
    border: 1px solid #000000;
    font-size: 1.29rem;
    cursor: pointer;

    @media (min-width: 360px) and (max-width: 430px){
        width: 4.5rem;
        font-size: .6rem;
        padding: 0.3rem;
    };

    @media (min-width: 600px) and (max-width: 800px) {
        width: 100px;
        padding: .5rem;
        font-size: .7rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 120px;
        padding: .5rem;
        font-size: .9rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 160px;
        padding: .7rem;
        font-size: 1rem;
    }
`
export const QuartoImg = styled.img`
    @media (min-width: 600px) and (max-width: 800px) {
        width: 10rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 13rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 15rem;
    }
`