import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 100%;
`
export const HomeImg = styled.img`
    width: 100%;
    height: 50rem;

    @media (min-width: 360px) and (max-width: 430px){
        height: 35rem;
        width: 100%;
    }

    @media (min-width: 431px) and (max-width: 599px) {
        height: 40rem;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        height: 30rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        height: 30rem;
    }
`