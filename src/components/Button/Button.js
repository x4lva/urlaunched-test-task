import React from 'react';
import "./Button.scss"

const Button = ({
    variant,
    children,
    onClick,
    style
}) => {

    const className = `button button-${variant || "primary"}`;

    return (
        <button onClick={onClick} className={className} style={style}>
            {children}
        </button>
    );
};

export default Button;