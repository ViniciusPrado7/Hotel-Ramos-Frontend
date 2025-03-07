import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  position: relative;
`;

export const TituloNav = styled.h1`
  display: flex;
  border-left: 1.5px solid black;
  width: 2rem;
  padding-left: .5rem;
  margin-left: 20rem;
  text-transform: uppercase;

  @media (max-width: 430px) {
    width: 1rem;
    margin-left: .8rem;
  }

  @media (min-width: 431px) and (max-width: 599px) {
    width: 1rem;
    margin-left: 1rem;
  }
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const UlNav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style: none;
  margin-left: 20rem;

  &.aberto {
    display: flex; 
  }

  @media (max-width: 430px) {
    display: none; 
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: -43%;
    width: 100%;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: left;
  }

  @media (min-width: 431px) and (max-width: 599px) {
    margin-left: 4rem;
    margin-right: 0rem;
    gap: 1rem;
  }
`;

export const LiNav = styled.li``;

export const NavListaItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  transition: 0.2s;

  &:hover, &:focus {
    color: #857f00;
  }
`;

export const ButtonNav = styled.button`
  width: 200px;
  padding: .5rem;
  text-transform: uppercase;
  color: black;
  background: white;
  margin-left: 18.2rem;
  cursor: pointer;

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
`;


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

  
`;
