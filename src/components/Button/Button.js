import React from "react";
import "./Button.css";

/**
 * @param {title} string
 * @returns

*/

const Button = ({title, handleClick}) => {

    return (
        <button className="tap" onClick={handleClick}>{title}</button>
    )

}

export default Button;