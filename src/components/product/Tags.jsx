import React from "react";

function Tags(props) {
    return (
        <div className="product-visuals_tags ">
            <ul className="flex">
                {props.children.map((tag) => (
                    <li key={`${props.id}_${tag}`}>{tag}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tags;
