import styled from "styled-components";

export const ContainerLogin = styled.div `
display: flex;
flex-direction: row;
place-content: center;
gap: 10rem;
margin: 7rem 0;
`

export const FormLogin = styled.form `
display: flex;
flex-direction: column;
background: white;
padding: 2rem;
border-radius: 1rem;
`
export const TituloLogin = styled.h1 `
`
export const InputLogin = styled.input `
padding: .5rem;
border-radius: .6rem;
`
export const LabelLogin = styled.label `
margin-top: 1rem;
`

export const BtnLogin = styled.button `
margin-top: 2rem;
padding: 1rem;
border-radius: 1rem;
background-color: black;
color: white;
cursor: pointer;
`
export const StyledError = styled.p `
color: red;
font-size: .8rem;
text-align: center;
`
export const StyledSuccess = styled.p `
color: green;
font-size: .8rem;
text-align: center;
`