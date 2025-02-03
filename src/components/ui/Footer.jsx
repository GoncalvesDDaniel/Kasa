import React from "react";
import White_logo from "../../assets/images/White_logo.svg";

function Footer() {
    return (
        <footer className="full-bleed footer">
            <img
                className="m-center footer-logo"
                src={White_logo}
                alt="Logo de Kasa"
            ></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
