import React from "react"
import "./FormGroup.scss"

const FormGroup = (props) => {
    return (
        <div className={"form-group"}>
            <div className="form-group-tile">
                {props.title}
            </div>
            <div className="form-group-content">
                {props.children}
            </div>
        </div>
    );
};

export default FormGroup;