import React from "react";

function Carrousel(props) {
    return (
        <>
            <div className="carrousel">
                {/* TODO change cover with carrousel */}
                <img src={props.cover}></img>
            </div>
        </>
    );
}

export default Carrousel;
