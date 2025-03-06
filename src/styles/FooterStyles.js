import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.div `
display: flex;
flex-direction: column;
border-top: 1px solid black;
margin: 2rem 20rem 0rem 20rem;

@media (min-width: 360px) and (max-width: 430px){
margin: 2rem 1rem 0rem 1rem;
};

@media (min-width: 431px) and (max-width: 600px) {
  margin: 2rem 1rem 0 1rem;
  };
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

@media (min-width: 360px) and (max-width: 430px){
font-size: .8rem;
};

@media (min-width: 431px) and (max-width: 600px) {
  width: 75%;
  }

`

export const ContainerContato = styled.div `
display: flex;
flex-direction: column;
justify-content: end;
margin: 2rem 0rem 2rem 0rem;

@media (min-width: 360px) and (max-width: 430px){
margin: 1rem 0rem 1rem 0rem;
};

`

export const InputFooter = styled.input `
border: 1px solid black;
padding: 0.5rem;
margin: 0.5rem 0 ;

@media (min-width: 360px) and (max-width: 430px){
 width: 5rem;
 font-size: .55rem;
 
};

`
export const ButtonFooter = styled.button `
border: 1px solid black;
background: black;
color: white;
padding: 0.5rem;
cursor: pointer;

@media (min-width: 360px) and (max-width: 430px){
  width: 6.2rem;
};
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
