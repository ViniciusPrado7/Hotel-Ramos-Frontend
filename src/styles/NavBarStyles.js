import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
background: white;

`
export const TituloNav = styled.h1 `
display: flex;
border-left: 1.5px solid black;
width: 2rem;
padding-left: .5rem;
margin-left: 20rem;;
text-transform: uppercase;
font-weight:
`
export const LinkHome = styled(Link) `
text-decoration: none;
color: black;
`
export const UlNav = styled.ul `
display: flex;
flex-direction: colunm;
gap: 2rem;
list-style: none;
margin-left: 20rem;
`

export const LiNav = styled.li `
`

export const NavListaItem = styled(Link) `
text-decoration: none;
cursor: pointer;
color: black;
transition: 0.2s;

&:hover {
color: #857f00;
}

&:focus {
color: #857f00;
}
`
export const ButtonNav = styled.button `

width: 200px;
padding: .5rem;
text-transform: uppercase;
color: black;
background: white;
margin-left: 18.2rem;
cursor: pointer;


`