import React from "react";
import Banner from "../../components/ui/Banner";
import Dropdown from "../../components/ui/Dropdown";

function About() {
    const title = "";
    const imgUrl = "../../../src/assets/images/About_banner.png";
    const imgAlt = "";

    return (
        <>
            <Banner title={title} imgUrl={imgUrl} imgAlt={imgAlt} />
            <Dropdown />
        </>
    );
}

export default About;
