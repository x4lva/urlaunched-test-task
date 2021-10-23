import React from "react"
import "./Button.scss"

const Button = ({
    variant,
    children,
    onClick,
    style,
    className
}) => {
    const btnClassName = `button button-${variant || "primary"} ${className}`;

    return (
        <button onClick={onClick} className={btnClassName} style={style}>
            {children}
        </button>
    );
};

export default Button;