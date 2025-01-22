import React from "react";

function Cards(props) {
    return (
        <>
            <div className="cards-container grid">
                {props.database.map((item) => (
                    <article
                        className="cards-item flex items-end"
                        key={item.id}
                    >
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

// <div className="cards-container grid">
//     <article className="cards-item flex items-end">
//         <h2 className="cards-item_title ">Titre de la location</h2>
//     </article>
// </div>
