import styled from "styled-components";

export const ContainerAmenidades = styled.div `
margin: 2rem 20rem 0rem 20rem;

@media (min-width: 360px) and (max-width: 430px){
 margin: 2rem 1rem 0rem 1rem;
};

@media (min-width: 431px) and (max-width: 600px) {
  margin: 2rem 1rem 0rem 1rem;
  }
`
export const TituloAmenidades = styled.h1 `
font-weight: 300;
font-size: 1.5rem;

@media (min-width: 360px) and (max-width: 430px){
 font-size: 1rem;
};
`
export const ContainerImagemAmenidades = styled.div `
display: flex;
margin-top: 1rem;
margin-bottom: 3rem;
border-top: 1px solid black;

@media (min-width: 360px) and (max-width: 430px){
 margin-bottom: .7rem;
}

@media (min-width: 431px) and (max-width: 600px) {
  margin-bottom: 1rem;
  }

`
export const ImagemLazerAmenidades = styled.img `
margin-top: 1rem;
width: 70%;
height: 30vh;

@media (min-width: 360px) and (max-width: 430px){
 height: 15vh;
 width: 50%;
};
`
export const ParagrafoImagemLazer = styled.p `
margin-top: 1rem;
margin-left: 3rem;
font-size: 1.5rem;
font-weight: 300;
font-style: italic;
width: 20%;

@media (min-width: 360px) and (max-width: 430px){
 font-size: .8rem;
 margin-left: .5rem;
 width: 30%;
};
@media (min-width: 431px) and (max-width: 600px) {
  font-size: 1.15rem;
  }
`
export const SubContainerAmenidades = styled.div `
display: flex;

`
export const UlAmenidades = styled.ul `

`
export const LiAmenidades = styled.li `
font-weight: 300;
font-style: italic;
font-size: 1.3rem;

@media (min-width: 360px) and (max-width: 430px){
 font-size: .8rem;
};

@media (min-width: 431px) and (max-width: 600px) {
  font-size: 1.15rem;
  }
`
export const ImagemPiscinaAmenidades = styled.img `
margin-top: 1rem;
width: 50%;
height: 30vh;

@media (min-width: 360px) and (max-width: 430px){
 height: 25vh;
 width: 45%;
}

@media (min-width: 431px) and (max-width: 600px) {
  width: 45%;
  }
`