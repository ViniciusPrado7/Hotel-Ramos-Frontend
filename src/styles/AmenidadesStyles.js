import styled from "styled-components";

export const ContainerAmenidades = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

    @media (min-width: 360px) and (max-width: 430px){
        margin: 2rem 1rem 0rem 1rem;
    };

    @media (min-width: 431px) and (max-width: 600px) {
        margin: 2rem 1rem 0rem 1rem;
    }
`
export const TituloAmenidades = styled.p`
    font-size: 1.2rem;
    opacity: .5;
    font-style: italic;
    width: 66.5%;
    border-bottom: 1px solid #000000;

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
export const SubcontainerAmenidades = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 66.5%;
    padding: 1rem 0;
    gap: 2rem;
    justify-content: center;

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
export const TxtAmenidades = styled.p`
    font-size: 1.2rem;
    margin-block-start: 0;
    margin-block-end: 0;
    opacity: .5;
    width: 20%;
    margin-left: 5rem;

    @media (min-width: 360px) and (max-width: 430px){
        font-size: .8rem;
        margin-left: .5rem;
        width: 30%;
    }

    @media (min-width: 431px) and (max-width: 599px) {
        font-size: 1.15rem;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        font-size: .7rem;
        margin-left: 0;
        width: 30%;
    }
    
    @media (min-width: 801px) and (max-width: 1250px) {
        font-size: .9rem;
        margin-left: 0;
        width: 30%;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        font-size: 1rem;
        margin-left: 0;
        width: 30%;
    }
`
export const ListaAmenidades = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    margin-right: 17rem;
    margin-left: 5rem;

    @media (min-width: 600px) and (max-width: 800px) {
        margin: 0;
        width: 80%;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        margin: 0;
        width: 80%;
    }
    
    @media (min-width: 1251px) and (max-width: 1600px) {
        margin: 0;
        width: 80%;
    }
`
export const ItemListaAmenidades = styled.li`
    opacity: .5;
    font-size: 1.2rem;

    @media (min-width: 360px) and (max-width: 430px){
        font-size: .8rem;
    };

    @media (min-width: 431px) and (max-width: 599px) {
        font-size: 1.15rem;
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
export const AmenidadesImg = styled.img`
    width: 20rem;
    height: 10rem;

    @media (min-width: 360px) and (max-width: 430px){
        height: 25vh;
        width: 45%;
    }

    @media (min-width: 431px) and (max-width: 599px) {
        width: 45%;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 25rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 28rem;
    }
`