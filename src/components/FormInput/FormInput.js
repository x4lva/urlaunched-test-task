import React, {useState} from 'react';
import "./FormInput.scss"
import EyeIcon from "../../img/EyeIcon";

const FormInput = (props) => {

    const [type, setType] = useState(props.type)

    const {
        name,
        id,
        placeholder,
        value,
        onChange
    } = props

    const initType = props.type

    const eyeIconClassName = `form-input-password-show ${type === "text" ? "active" : ""}`

    return (
        <div className={"form-input-wrapper"}>
            <input onChange={(e) => onChange(e)} className={"form-input"} type={type} name={name} id={id} placeholder={placeholder} value={value} />
            { initType === "password" && (
                <div className={eyeIconClassName}>
                    <EyeIcon  onClick={() => setType(type === "text" ? "password" : "text")} />
                </div>
            ) }
        </div>
    );
};

export default FormInput;