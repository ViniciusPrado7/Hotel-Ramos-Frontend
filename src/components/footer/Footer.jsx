import React from 'react'
import { ButtonFooter, ContainerContato, ContainerFooter, ContainerIcons, ContainerLocalizacao, DivCriador, InputFooter, LinkIcons, ParagrafoCriador, ParagrafoFooter, SubContainer } from '../../styles/FooterStyles'
import { FaTwitter, FaTripadvisor, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  
  const getDate = () => {
    return new Date().getFullYear();
  }

  return (
    <ContainerFooter>
      <SubContainer>
      <ContainerLocalizacao>
          <ParagrafoFooter>Av.Gov.Celso.Ramos, 154</ParagrafoFooter>
          <ParagrafoFooter>Porto Belo, SC 12345-678 | 0-800-000-0000  </ParagrafoFooter>

        <ContainerIcons>
          <LinkIcons to='https://x.com/?lang=pt' target='_blanck'>
            <FaTwitter />
          </LinkIcons>

          <LinkIcons to='https://www.tripadvisor.com.br' target='_blank'>
            <FaTripadvisor />
          </LinkIcons>

          <LinkIcons to='https://www.facebook.com/?locale=pt_BR' target='_blank'>
            <FaFacebookF />
          </LinkIcons>

          <LinkIcons>
            <FaInstagram to='https://www.instagram.com' target='_blank'/>
          </LinkIcons>
        </ContainerIcons>
      </ContainerLocalizacao>
        <ContainerContato>
          <ParagrafoFooter>Entre em contato conosco</ParagrafoFooter>
          <InputFooter type="text" placeholder='Insira seu email aqui' />
          <ButtonFooter>participar</ButtonFooter>
        </ContainerContato>
        </SubContainer>
      <DivCriador>
          <ParagrafoCriador> &copy; {getDate()} Vinícius de Souza Prado</ParagrafoCriador>
        </DivCriador>
    </ContainerFooter>
  )
}

export default Footer
