import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ButtonNav, LiNav, LinkHome, MenuToggle, Nav, NavListaItem, TituloNav, UlNav } from '../../styles/NavBarStyles';

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <Nav>
      <TituloNav>
        <LinkHome to="/">Hotel Ramos</LinkHome>
      </TituloNav>

      {/* Ícone do menu hambúrguer */}
      <MenuToggle onClick={() => setMenuAberto(!menuAberto)}>
        <GiHamburgerMenu size={30} />
      </MenuToggle>

      {/* Lista de navegação condicional */}
      <UlNav className={menuAberto ? "aberto" : ""}>
        <LiNav>
          <NavListaItem to="/">Início</NavListaItem>
        </LiNav>
        <LiNav>
          <NavListaItem to="/explore">Explore</NavListaItem>
        </LiNav>
        <LiNav>
          <NavListaItem to="/quartos">Quartos</NavListaItem>
        </LiNav>
        <LiNav>
          <NavListaItem to="/amenidades">Amenidades</NavListaItem>
        </LiNav>
      </UlNav>

      <ButtonNav>Reserve já</ButtonNav>
    </Nav>
  );
}

export default NavBar;
