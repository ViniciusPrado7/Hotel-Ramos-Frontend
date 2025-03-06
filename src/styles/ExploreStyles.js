import styled from "styled-components";

export const ContainerExplore = styled.div `
margin: 2rem 20rem 0rem 20rem;

@media (min-width: 360px) and (max-width: 430px){
 margin: 2rem 2rem 0 1rem;
};

@media (min-width: 431px) and (max-width: 600px) {
  margin: 2rem 1rem 0 1rem;
  }

`
export const SubContainerExplore = styled.div `
display: flex;
flex-direction:row;
`
export const ImagemAlmoco = styled.img `
width: 16%;
height: 8rem;
margin: 0rem 2rem 2rem 0rem;

@media (min-width: 360px) and (max-width: 430px){
 width: 28%;
 height: 6.5rem;
};
`
export const ParagrafoAlmoco = styled.p `
font-style: italic;
font-weight: 300;
width: 66%;

@media (min-width: 360px) and (max-width: 430px){
 width: 100%;
 font-size: .8rem;
};

`
export const DivImagensExplore = styled.div `
display: flex;
flex-direction: row;

`
export const ImagensExplore = styled.img `
width: 50%;
height: 15rem;
margin: 1rem 1rem 1rem 0;

@media (min-width: 360px) and (max-width: 430px){
 height: 10rem;
 margin: .8rem .8rem .8rem 0;
};

@media (min-width: 431px) and (max-width: 600px) {
    width: 49%;
  }

`