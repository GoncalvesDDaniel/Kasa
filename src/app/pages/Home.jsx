import React from "react";
import Banner from "../../components/ui/Banner";
import Cards from "../../components/cards/Cards";
import { default as db } from "../../api/db.json";

function Home() {
    const title = "Chez vous, partout et ailleurs";
    const imgUrl = "../../../src/assets/images/Hero_banner.png";
    const imgAlt = "";
    const database = db;

    return (
        <>
            <Banner title={title} imgUrl={imgUrl} imgAlt={imgAlt} />
            <Cards database={database} />
        </>
    );
}

export default Home;
