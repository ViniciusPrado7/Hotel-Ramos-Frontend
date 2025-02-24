import React from 'react'
import { ButtonNav, LiNav, Nav, NavListaItem, TituloNav, UlNav } from '../../styles/NavBarStyles'

function NavBar() {
  return (
    <Nav>
        <TituloNav>Hotel Rameira</TituloNav>

        <UlNav>
            <LiNav>
                <NavListaItem to='# '> Início </NavListaItem>
            </LiNav>
            <LiNav>
                <NavListaItem to='#'> Explore </NavListaItem>
            </LiNav>
            <LiNav>
                <NavListaItem to='#'> Quartos </NavListaItem>
            </LiNav>
            <LiNav>
                <NavListaItem to='#'> Amenidades </NavListaItem>
            </LiNav>
        </UlNav>

        <ButtonNav>Reserve já</ButtonNav>
    </Nav>
  )
}

export default NavBar