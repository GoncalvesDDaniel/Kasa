import React, { useState } from "react";

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                type="button"
                className="dropdown relative "
                // style={`${isOpen && { height: "100%" }}`}
                aria-expanded={`${isOpen ? true : false}`}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className="dropdown-bar flex justify-between">
                    <p className="dropdown-title">{props.title}</p>
                    <img src="src/assets/images/Dropdown_arrow.svg" alt="" />
                </div>
                <div
                    className={`dropdown-content ${
                        isOpen ? "collapse-show" : "collapse"
                    }`}
                    aria-hidden={`${isOpen ? "false" : "true"}`}
                >
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Dropdown;
