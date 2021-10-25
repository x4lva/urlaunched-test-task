import React from "react"
import "./Button.scss"

const Button = ({
    variant,
    children,
    style,
    className
}) => {
    const btnClassName = `button button-${variant || "primary"} ${className}`;

    return (
        <button className={btnClassName} style={style}>
            {children}
        </button>
    );
};

export default Button;