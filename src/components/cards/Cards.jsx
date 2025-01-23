import React, { useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

function Cards(props) {
    let navigate = useNavigate();

    // const [cardClick, setcardClick] = useState();

    // function handleClick(e) {
    // const card = e.target.parentElement.dataset.id;
    // // target is filter from a json db
    // const target = props.database.filter((cards) => cards.id === card)[0];

    // console.log(target);
    // setcardClick({ ...target });
    // console.(e) => handleClick(e)log(cardClick);
    // const cardId = e.target.parentElement.dataset.id;
    // setcardClick(props.database.filter((cards) => cards.id === cardId)[0]);
    // const target = props.database.filter((cards) => cards.id === cardId)[0];
    // navigate(`/products/${cardId}`, { target });
    // }

    return (
        <>
            <div className="cards-container grid">
                {props.database.map((item) => (
                    <article
                        className="cards-item flex items-end"
                        data-id={item.id}
                        key={item.id}
                        onClick={() => navigate(`/products/${item.id}`)}
                    >
                        <img src={item.cover} alt="" />
                        <h2
                            className="cards-item_title "
                            // key={`${item.id}-title`}
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
