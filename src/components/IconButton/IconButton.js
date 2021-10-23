import React from 'react'
import "./IconButton.scss"

const IconButton = (props) => {

    const className = `icon-btn-wrapper ${props.className}`

    return (
        <div className={className}>
            <div className="icon-btn">
                <div className="icon-btn-img">
                    {props.icon}
                </div>
                <div className="icon-btn-content">
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default IconButton;