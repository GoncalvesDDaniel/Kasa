import React from "react";
import { NavLink } from "react-router";

function NotFound() {
    return (
        <>
            <p className="notFound">404</p>
            <p className="notFound-subtitle">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/" className="notFound-link">
                Retourner sur la page d'acceuil
            </NavLink>
        </>
    );
}

export default NotFound;
