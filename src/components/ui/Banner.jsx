import React from "react";

function Banner(props) {
    return (
        <>
            <div
                className="banner"
                style={{
                    backgroundImage: `url(${props.imgUrl})`,
                }}
            >
                {props.title && <h1 className="banner-title">{props.title}</h1>}
            </div>
        </>
    );
}

export default Banner;
