import React from "react";
import Banner from "../../components/ui/Banner";
import Dropdown from "../../components/ui/Dropdown";

function About() {
    const imgUrl = "src/assets/images/About_banner.png";
    const mokedContent = (
        <ul>
            <li>Climatisation</li>
            <li>Wi-Fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li>Cintres</li>
        </ul>
    );
    return (
        <>
            <Banner title="" imgUrl={imgUrl} imgAlt="" />
            <div className=" about flex flex-col m-center">
                <Dropdown title="Fiabilité">{mokedContent}</Dropdown>
                <Dropdown title="Respect">{mokedContent}</Dropdown>
                <Dropdown title="Service">{mokedContent}</Dropdown>
                <Dropdown title="Sécurité">{mokedContent}</Dropdown>
            </div>
        </>
    );
}

export default About;
