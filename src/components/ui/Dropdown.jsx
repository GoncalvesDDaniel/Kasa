import React, { useState } from "react";
import Dropdown_arrow from "./../../assets/images/Dropdown_arrow.svg";

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    let content;
    if (Array.isArray(props.children)) {
        content = (
            <ul>
                {props.children.map((item, index) => {
                    return <li key={`${props.id}-${index}`}>{item}</li>;
                })}
            </ul>
        );
    } else {
        content = props.children;
    }
    return (
        <>
            <div
                type="button"
                className="dropdown relative"
                aria-expanded={`${isOpen ? true : false}`}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className="dropdown-bar flex justify-between">
                    <p className="dropdown-title">{props.title}</p>
                    <img src={Dropdown_arrow} alt="" />
                </div>
                <div
                    className={`dropdown-content ${isOpen ? "" : "collapse"}`}
                    aria-hidden={`${isOpen ? "false" : "true"}`}
                >
                    {content}
                </div>
            </div>
        </>
    );
}

export default Dropdown;
