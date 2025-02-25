import React from 'react'
import { ButtonNav, LiNav, LinkHome, Nav, NavListaItem, TituloNav, UlNav } from '../../styles/NavBarStyles'

function NavBar() {
  return (
    <Nav>
        <TituloNav>
            <LinkHome to ='/'> Hotel Ramos </LinkHome>  
        </TituloNav>

        <UlNav>
            <LiNav>
                <NavListaItem to='/ '> Início </NavListaItem>
            </LiNav>
            <LiNav>
                <NavListaItem to='/explore'> Explore </NavListaItem>
            </LiNav>
            <LiNav>
                <NavListaItem to='/quartos'> Quartos </NavListaItem>
            </LiNav>
            <LiNav>
                <NavListaItem to='/amenidades'> Amenidades </NavListaItem>
            </LiNav>
        </UlNav>

        <ButtonNav>Reserve já</ButtonNav>
    </Nav>
  )
}

export default NavBar