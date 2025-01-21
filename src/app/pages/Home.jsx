import React from "react";
import Banner from "../../components/ui/Banner";
import Cards from "../../components/cards/Cards";

function Home() {
    const title = "Chez vous, partout et ailleurs";
    const imgUrl = "../../../src/assets/images/Hero_banner.png";
    const imgAlt = "";

    return (
        <>
            <Banner title={title} imgUrl={imgUrl} imgAlt={imgAlt} />
            <Cards />
        </>
    );
}

export default Home;
