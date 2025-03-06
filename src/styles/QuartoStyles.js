import styled from "styled-components";

export const ContainerQuarto = styled.div `
display: flex;
flex-direction: column;
margin: 2rem 20rem 0rem 20rem;

@media (min-width: 360px) and (max-width: 430px){
 margin: 2rem 1rem 0rem 1rem;
};

@media (min-width: 431px) and (max-width: 600px) {
  margin: 2rem 1rem 0rem 1rem;
  }
`
export const TituloAcomodacao = styled.h1 `
color: black;
font-weight: 300;
font-style: italic;
font-size: 1.5rem;
@media (min-width: 360px) and (max-width: 430px){
 font-size: 1rem;
};
`
export const DivQuartos = styled.div `
display: flex;
flex-direction: row;
border-top: 1px solid black;
margin: 0;

@media (min-width: 360px) and (max-width: 430px){
 margin-bottom: 1rem;
};
`
export const ImagemQuarto = styled.img `
margin: 2rem 0rem 2rem 0rem;
height: 10rem;
width: 30%;

@media (min-width: 360px) and (max-width: 430px){
 margin: 1rem 0rem 1rem 0rem;
 height: 7rem;
 width: 30%;
};
`
export const DivInformacoesQuartos = styled.div `
display: flex;
flex-direction: column;
margin: 1rem 0 0 2rem;
width: 60%;

@media (min-width: 360px) and (max-width: 430px){
 margin: 1rem 0 0 1rem;
};
`
export const  TituloInfoQuarto = styled.h1 `
color: black;
font-size: 1.4rem;
@media (min-width: 360px) and (max-width: 430px){
 font-size: 1rem;
};

`
export const ParagrafoInfoQuarto = styled.p `
color: black;
font-weight: 300;
margin: 0.3rem 0;

@media (min-width: 360px) and (max-width: 430px){
 font-size: .8rem;
 margin: 0.5rem 0;
};
`
export const Ulquarto = styled.ul `
margin: 0;
`
export const Liquarto = styled.li `
margin: 0;
color: black;
font-weight: 300;

@media (min-width: 360px) and (max-width: 430px){
 font-size: .8rem;
 
};
`
export const DivInfoValor = styled.div `
display: flex;
flex-direction: column;
align-items: center;

`
export const H2Valor = styled.h2 `
color: black;
font-weight: 300;
margin: 3rem 0 0 0;
font-size: 1.1rem;

@media (min-width: 360px) and (max-width: 430px){
 font-size: .8rem;
 margin: 3rem 0 0 0;
};
`
export const ParagrafoValor = styled.p `
Color: black;
font-size: 1rem;
font-weight: bold;

@media (min-width: 360px) and (max-width: 430px){
 font-size: .6rem;
};
`
export const ButtonValor = styled.button`
border: 1px solid black;
color: white;
font-size: 1rem;
background: black;
padding: 0.5rem;
cursor: pointer;

@media (min-width: 360px) and (max-width: 430px){
 width: 4.5rem;
 font-size: .6rem;
 padding: 0.3rem;
};

`