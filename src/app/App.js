import "./App.scss";
import Button from "../components/Button/Button";
import IconButton from "../components/IconButton/IconButton";
import MaleIcon from "../img/Male"
import FemaleIcon from "../img/Female"
import OtherIcon from "../img/Other"
import FormGroup from "../components/FormGroup/FormGroup";
import FormInput from "../components/FormInput/FormInput";
import { useState } from "react";
import FormHeader from "../components/FormHeader/FormHeader";

function App() {
    const [formData, setFormData] = useState({
        email: '', password: '', repeatPassword: '', gender: 'Male'
    });

    const [formErrors, setFormErrors] = useState({});

    const formParams = {
        email: {
            required: true, email: true
        },
        password: {
            required: true, minLength: 6
        },
        repeatPassword: {
            required: true, minLength: 6, equals: { field: 'password', name: 'Password' }
        }
    }

    const formValidateHandler = (e, params) => {
        setFormErrors(prevFormErrors => ({...prevFormErrors, [e.target.name]: [] }));

        if (params?.required && e.target.value === '') {
            setFormErrors(prevFormErrors => ({ ...prevFormErrors, [e.target.name]: [ "Field can not be empty"] }));
            return true;
        }

        if (params?.email && !e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setFormErrors(prevFormErrors => ({ ...prevFormErrors, [e.target.name]: [ "Field must be email"] }));
            return true;
        }

        if (params?.minLength && e.target.value.length < params?.minLength) {
            setFormErrors(prevFormErrors => ({ ...prevFormErrors, [e.target.name]: [ `Field must be longer than ${params.minLength}`] }));
            return true;
        }

        if (params?.equals?.field && e.target.value !== formData[params.equals?.field]) {
            setFormErrors(prevFormErrors => ({ ...prevFormErrors, [e.target.name]: [ `Filed doest match with ${params.equals.name} field`] }));
            return true;
        }

        return false;
    }

    const formChangeHandler = (e, params) => {
        formValidateHandler(e, params);

        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const formSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;
        // Check form errors
        for (const formFiled in formData) {
            if (formValidateHandler({target: {name: formFiled, value: formData[formFiled]}}, formParams[formFiled]))
                hasErrors = true;
        }

        if (!hasErrors) alert(JSON.stringify(formData));
    }

    return (
        <main className={"container min-vh-100"}>
            <div className="form-container shadow">
                <FormHeader />
                <form>
                    <FormGroup title={"Gender"}>
                        <div className="row gx-3">
                            <label className="gender-radio col-4">
                                <input checked={formData.gender === "Male"}
                                       value={"Male"}
                                       type="radio"
                                       name={"gender"}
                                       onChange={formChangeHandler}/>
                                <IconButton content={"Male"} icon={<MaleIcon />} />
                            </label>
                            <label className="gender-radio col-4">
                                <input checked={formData.gender === "Female"}
                                       value={"Female"}
                                       type="radio"
                                       name={"gender"}
                                       onChange={formChangeHandler}/>
                                <IconButton content={"Female"} icon={<FemaleIcon />}/>
                            </label>
                            <label className="gender-radio col-4">
                                <input checked={formData.gender === "Other"}
                                       value={"Other"} type="radio"
                                       name={"gender"}
                                       onChange={formChangeHandler}/>
                                <IconButton content={"Other"} icon={<OtherIcon />} />
                            </label>
                        </div>
                    </FormGroup>
                    <FormGroup title={"E-mail"}>
                        <FormInput
                            errors={formErrors.email}
                            params={formParams.email}
                            onChange={formChangeHandler}
                            value={formData.email}
                            type={"text"}
                            name={"email"}
                            placeholder={"E-mail"} />
                    </FormGroup>

                    <FormGroup title={"Create Password"}>
                        <FormInput
                            errors={formErrors.password}
                            params={formParams.password}
                            onChange={formChangeHandler}
                            value={formData.password}
                            type={"password"}
                            name={"password"}
                            placeholder={"Password"} />
                    </FormGroup>

                    <FormGroup title={"Confirm Password"}>
                        <FormInput
                            errors={formErrors.repeatPassword}
                            params={formParams.repeatPassword}
                            onChange={formChangeHandler}
                            value={formData.repeatPassword}
                            type={"password"}
                            name={"repeatPassword"}
                            placeholder={"Repeat password"} />
                    </FormGroup>

                    <Button className={"mb-4"} onClick={(e) => formSubmit(e)} variant={"primary"}>Sign Up</Button>
                </form>

                <div className="form-info">
                    Already have an account? <a href="#">Log in</a>
                </div>
                <div className="form-info">
                    Review privacy and disclosures <a href="#">here</a>
                </div>
            </div>
        </main>
    );
}

export default App;