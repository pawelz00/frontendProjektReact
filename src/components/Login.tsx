import React from "react"
import { useNavigate } from "react-router-dom";

export const Login : React.FC = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/posts");
    }

    const handleRegister = () => {
        const span = document.getElementById("register--span")
        span!.innerText = "Registered!" 
        setTimeout(() => span!.innerText="", 1000);
    }

    return (
       <div className="login--comp">
            <div className="login">
                <input placeholder='Username' className="login--input" type="text"/>
                <input placeholder='Password' className="login--input" type="text"/>
                <button onClick={handleLogin} className="login--button">LOGIN</button>
            </div>
            <div className="register">
                <input placeholder='Username' className="register--input" type="text"/>
                <input placeholder='Password' className="register--input" type="text"/>
                <input placeholder='Email' className="register--input" type="text"/>
                <button onClick={handleRegister} className="register--button">REGISTER</button>
                <span id="register--span"></span>
            </div>
       </div>
       
    )
}