import './App.scss';
import Button from "../components/Button/Button";
import IconButton from "../components/IconButton/IconButton";
import MaleIcon from "../img/male.svg"
import FormGroup from "../components/FormGroup/FormGroup";
import FormInput from "../components/FormInput/FormInput";
import {useState} from "react";

function App() {

    const [formData, setFormData] = useState({
        email: '', password: '', repeatPassword: ''
    });

    const formChangeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const formSubmit = (e) => {
        e.preventDefault()

        alert(JSON.stringify(formData))
    }

    return (
        <div className={"container align-items-center justify-content-center min-vh-100 d-flex"}>
            <div className="form-container shadow">
                <form>
                    <FormGroup title={"Gender"}>
                        <div className="row gx-4">
                            <IconButton className={"col-4"} content={"Male"} icon={<img src={MaleIcon} alt="Male Icon" height={32}/>} />
                            <IconButton className={"col-4"} content={"Male"} icon={<img src={MaleIcon} alt="Male Icon" height={32}/>} />
                            <IconButton className={"col-4"} content={"Male"} icon={<img src={MaleIcon} alt="Male Icon" height={32}/>} />
                        </div>
                    </FormGroup>
                    <FormGroup title={"E-mail"}>
                        <FormInput onChange={formChangeHandler} value={formData.email} type={"text"} name={"email"} placeholder={"E-mail"} />
                    </FormGroup>

                    <FormGroup title={"Create Password"}>
                        <FormInput onChange={formChangeHandler} value={formData.password} type={"password"} name={"password"} placeholder={"Password"} />
                    </FormGroup>

                    <FormGroup title={"Confirm Password"}>
                        <FormInput onChange={formChangeHandler} value={formData.repeatPassword} type={"password"} name={"repeatPassword"} placeholder={"Repeat password"} />
                    </FormGroup>

                    <Button onClick={(e) => formSubmit(e)} variant={"primary"}>Sign Up</Button>
                </form>
            </div>
        </div>
    );
}

export default App;
