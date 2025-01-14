import React from "react";
import { NavLink } from "react-router";

function Header() {
    return (
        <header className="header">
            <img
                className="header-logo"
                src="http://localhost:5173/src/assets/images/Logo.svg"
                alt="Logo de Kasa"
            ></img>
            <nav className="header-nav flex">
                <NavLink to={"/"}>Accueil</NavLink>
                <br />
                <NavLink to={"/about"}>À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;