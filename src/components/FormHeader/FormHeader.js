import React from 'react';
import "./FormHeader.scss"
import Logo from "../../img/logo.svg"

const FormHeader = () => {
    return (
        <div className={"form-header"}>
            <img src={Logo} alt="" width={80}/>
            <h2>Sign Up with email</h2>
        </div>
    );
};

export default FormHeader;