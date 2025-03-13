import styled from "styled-components";

export const ContainerExplore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 0 0;

    @media (min-width: 360px) and (max-width: 430px){
        margin: 2rem 2rem 0 1rem;
    };

    @media (min-width: 431px) and (max-width: 599px) {
        margin: 2rem 1rem 0 1rem;
    }
`
export const ExploreImgTxt = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 64.8%;
    gap: 2rem;

    @media (min-width: 600px) and (max-width: 800px) {
        width: 80%;
        gap: 1rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 80%;
        gap: 1rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 66%;
        gap: 1rem;
    }
`
export const ExploreTxt = styled.p`
    font-size: 1.1rem;
    font-style: italic;
    opacity: .5;
    width: 50%;

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
export const ExploreImgs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3.5rem;
    margin: 2rem 0;
    

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
export const ExploreImgCafe = styled.img`
height: 8rem;
`
export const ExploreImg = styled.img`

    height: 15rem;
    width: 36rem;

    @media (min-width: 360px) and (max-width: 430px){
        height: 10rem;
        margin: .8rem .8rem .8rem 0;
        
    };

    @media (min-width: 431px) and (max-width: 599px) {
        width: 49%;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        width: 15rem;
        height: 7rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 18rem;
        height: 7rem;
    }
    
    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 21rem;
        height: 9rem;
    }
`