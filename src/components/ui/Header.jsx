import React from "react";
import { NavLink } from "react-router";
import Logo from "../../assets/images/Logo.svg";

function Header() {
    return (
        <header className="header flex justify-between items-center ">
            <img className="header-logo" src={Logo} alt="Logo de Kasa"></img>
            <nav className="header-nav flex">
                <NavLink to={"/"}>Accueil</NavLink>
                <NavLink to={"/about"}>À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
