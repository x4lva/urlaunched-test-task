import React from 'react';
import "./FormHeader.scss"
import Logo from "../../img/logo.svg"

const FormHeader = () => {
    return (
        <div className={"form-header"}>
            <img src={Logo} alt="Form Header Logo" width={80}/>
            <h2>Sign Up with email</h2>
        </div>
    );
};

export default FormHeader;