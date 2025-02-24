import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.div `
display: flex;
flex-direction: column;
border-top: 1px solid black;
margin: 2rem 20rem 0rem 20rem;
`
export const SubContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
`

export const ContainerLocalizacao = styled.div `

margin: 2rem 5rem 2rem 0; 
`
export const ParagrafoFooter = styled.p `
color: black;
font-style: italic;
margin: 0;
`

export const ContainerContato = styled.div `
display: flex;
flex-direction: column;
justify-content: end;
margin: 2rem 0rem 2rem 0rem;

`

export const InputFooter = styled.input `
border: 1px solid black;
padding: 0.5rem;
margin: 0.5rem 0 ;
`
export const ButtonFooter = styled.button `
border: 1px solid black;
background: black;
color: white;
padding: 0.5rem;
cursor: pointer;
`

export const ContainerIcons = styled.div `
display: flex;
margin-top: 2rem;
gap: 1rem;
`
export const LinkIcons = styled(Link)`
text-decoration: none;
color:black;
font-size: 1.5rem;
`

export const DivCriador = styled.div `
display: flex;
justify-content: center;
margin: 2rem;
`

export const ParagrafoCriador = styled.p`
color: gray;
`
