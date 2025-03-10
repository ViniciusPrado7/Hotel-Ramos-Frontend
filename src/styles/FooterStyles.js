import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100%;
    text-align: center;

    @media (min-width: 360px) and (max-width: 430px){
        margin: 2rem 1rem 0rem 1rem;
    };

    @media (min-width: 431px) and (max-width: 599px) {
        margin: 2rem 1rem 0 1rem;
    };
`
export const SubcontainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    border-top: 1px solid #000000;
    margin: 2rem 20rem 0 20rem;

    @media (min-width: 600px) and (max-width: 800px) {
        margin: 2rem 3rem 0 3rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        margin: 2rem 5rem 0 5rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        margin: 2rem 5rem 0 5rem;
    }
`
export const FooterInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    text-align: start;
`
export const FooterInfosTxt = styled.p`
    font-size: 1rem;
    color: #000000;
    font-style: italic;
    margin-block-start: 0;
    margin-block-end: 0;
    opacity: .5;

    @media (min-width: 360px) and (max-width: 430px){
        font-size: .8rem;
    };

    @media (min-width: 431px) and (max-width: 599px) {
        width: 75%;
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
export const FooterSocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`
export const FooterSocialMediaLink = styled(Link)`
    font-size: 1.5rem;
    color: #000000;
    text-decoration: none;
    transition: .2s ease-in;

    &:hover {
        color: #857F00;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        font-size: 1rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        font-size: 1rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        font-size: 1.2rem;
    }
`
export const FooterContact = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    text-align: start;

    @media (min-width: 360px) and (max-width: 430px){
        margin: 1rem 0rem 1rem 0rem;
    };
`
export const FooterContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
export const FooterContactInput = styled.input`
    width: 255px;
    padding: .5rem;
    border: 1px solid #000000;
    outline: none;
    background-color: #E6E6E6;

    @media (min-width: 360px) and (max-width: 430px){
        width: 5rem;
        font-size: .55rem;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        width: 150px;
            &::placeholder {
                font-size: .7rem;
            }
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 170px;
            &::placeholder {
                font-size: .9rem;
            }
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 200px;
            &::placeholder {
                font-size: 1rem;
            }
    }
`
export const FooterContactBtn = styled.button`
    width: 273px;
    padding: .5rem;
    background-color: #000000;
    color: #FFFFFF;
    border: 1px solid #000000;
    cursor: pointer;

    @media (min-width: 360px) and (max-width: 430px){
        width: 6.2rem;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        width: 167px;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 187px;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 219px;
    }
`
export const ContainerFooterCopy = styled.p`
    font-size: .9rem;
    color: #000000;
    margin: 2rem 0;
    opacity: .5;

    @media (min-width: 600px) and (max-width: 800px) {
        font-size: .5rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        font-size: .7rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        font-size: .9rem;
    }
`