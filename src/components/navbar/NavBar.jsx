import React, { useState } from "react";
import {
    IconBtn,
    LinkLogin,
    MenuToggle, Nav, NavBtn, NavLista, NavListaItem,
    NavListaItemLink, NavLogo, NavLogoLink
} from "../../styles/NavBarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function NavBar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const handleMenuClick = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <Nav> {/* Container da NavBar */}
            <NavLogo> {/* Container da img logo */}
                <NavLogoLink to="/">Hotel Ramos</NavLogoLink> {/* Link da HomePage no logo */}
            </NavLogo>

            {/* Botão de menu hamburguer */}
            <MenuToggle onClick={handleMenuClick}>
                <GiHamburgerMenu size={30} />
            </MenuToggle>

            {/* Lista de navegação */}
            <NavLista menuAberto={menuAberto}>
                <NavListaItem>
                    <NavListaItemLink to="/">Início</NavListaItemLink>
                </NavListaItem>
                <NavListaItem>
                    <NavListaItemLink to="/explore">Explore</NavListaItemLink>
                </NavListaItem>
                <NavListaItem>
                    <NavListaItemLink to="/quartos">Quartos</NavListaItemLink>
                </NavListaItem>
                <NavListaItem>
                    <NavListaItemLink to="/amenidades">Amenidades</NavListaItemLink>
                </NavListaItem>
            </NavLista>
            
            <NavBtn>Reserve já</NavBtn> {/* Botão de reservar quarto */}

            <IconBtn>
                <LinkLogin to="/login"> <FaUser/> </LinkLogin>   
            </IconBtn>

        </Nav>
    );
}

export default NavBar;
