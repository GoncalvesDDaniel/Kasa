import React from "react";
import { useNavigate } from "react-router";

function Cards(props) {
    let navigate = useNavigate();
    return (
        <>
            <div className="cards-container grid">
                {props.database.map((item) => (
                    <article
                        className="cards-item flex items-end"
                        key={item.id}
                        onClick={() => navigate(`/products/${item.id}`)}
                    >
                        <img src={item.cover} alt="" />
                        <h2
                            className="cards-item_title "
                            key={`${item.id}-title`}
                        >
                            {item.title}
                        </h2>
                    </article>
                ))}
            </div>
        </>
    );
}

export default Cards;
