import React from "react";
import Banner from "../../components/ui/Banner";
import Cards from "../../components/cards/Cards";
import { default as db } from "../../api/db.json";

function Home() {
    const imgUrl = "src/assets/images/Hero_banner.png";
    const database = db;

    return (
        <>
            <Banner
                title="Chez vous, partout et ailleurs"
                imgUrl={imgUrl}
                imgAlt=""
            />
            <Cards database={database} />
        </>
    );
}

export default Home;
