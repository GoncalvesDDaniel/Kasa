import React from "react";
import { NavLink } from "react-router";

function Header() {
    return (
        <header className="header flex justify-between items-center ">
            <img
                className="header-logo"
                src="./src/assets/images/Logo.svg"
                alt="Logo de Kasa"
            ></img>
            <nav className="header-nav flex">
                <NavLink to={"/"}>Accueil</NavLink>
                <NavLink to={"/about"}>À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
