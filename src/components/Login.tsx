import React from "react"
import { useNavigate } from "react-router-dom";

export const Login : React.FC = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/posts");
    }

    const handleRegister = () => {
        alert("Zarejestrowano!")
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
            </div>
       </div>
       
    )
}