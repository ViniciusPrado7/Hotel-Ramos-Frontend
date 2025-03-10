import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const NavLogo = styled.h1`
    font-size: 1.5rem;
    font-weight: 0;
    border-left: 1px solid #000;
    width: 2rem;
    margin-left: 20rem;
    padding-left: .5rem;
    text-transform: uppercase;

    @media (max-width: 430px) {
        width: 1rem;
        margin-left: .8rem;
    }

    @media (min-width: 431px) and (max-width: 599px) {
        width: 1rem;
        margin-left: 1rem;
    }


    @media (min-width: 600px) and (max-width: 800px) {
        margin-left: 3rem;
        font-size: 1rem;
    }
        
    @media (min-width: 801px) and (max-width: 1250px) {
        margin-left: 5rem;
        font-size: 1.2rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        margin-left: 13rem;
        font-size: 1.2rem;
    }
`
export const NavLogoLink = styled(Link)`
    text-decoration: none;
    color: #000000;
`
export const NavLista = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    gap: 1.3rem;
    margin-left: 21.5rem;

    @media (max-width: 430px) {
        display: ${({ menuAberto }) => (menuAberto ? "flex" : "none")}; 
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 70px;
        width: 50%;
        background: white;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        text-align: left;
        margin-left: 0;
    }

    @media (min-width: 431px) and (max-width: 599px) {
        margin-left: 4rem;
        margin-right: 0rem;
        gap: 1rem;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        margin-left: 3rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        margin-left: 5rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        margin-left: 13rem;
    }
`
export const NavListaItem = styled.li`
    font-size: 1.1rem;

    @media (min-width: 801px) and (max-width: 1250px) {
        font-size: .7rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        font-size: .9rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        font-size: 1rem;
    }
`
export const NavListaItemLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    transition: .2s ease-in;

    &:hover {
        color: #857F00;
    }
    
    &:focus {
        color: #857F00;
    }
`
export const IconBtn = styled.div `
display: flex; 
flex-direction: row;
margin-left: 5rem;
font-size: 1.4rem;
`
export const LinkLogin = styled(Link) `
text-decoration: none;
color: black;
`
export const NavBtn = styled.button`
    width: 200px;
    color: #000000;
    padding: .5rem;
    border: 1px solid #000000;
    text-transform: uppercase;
    background-color: #E6E6E6;
    cursor: pointer;
    margin-left: 20rem;

    @media (max-width: 430px) {
        width: 100px;
        padding: .2rem;
        margin-left: 13.5rem;
    }

    @media (min-width: 431px) and (max-width: 599px) {
        width: 150px;
        padding: .5rem;
        margin-left: .8rem;
    }

    @media (min-width: 600px) and (max-width: 800px) {
        width: 120px;
        margin-left: 3rem;
        font-size: .5rem;
        padding: .3rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 120px;
        margin-left: 5rem;
        font-size: .9rem;
        padding: .5rem;
    }

    @media (min-width: 1251px) and (max-width: 1600px) {
        width: 160px;
        margin-left: 13rem;
        font-size: 1rem;
        padding: .7rem;
    }
`
export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width:360px) and (max-width: 430px) {
    display: block; 
    position: absolute;
    margin-left: 10rem;
  }
`