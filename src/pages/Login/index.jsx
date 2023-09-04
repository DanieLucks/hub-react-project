import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"
import "./style.scss"

export const Login = () => {
    return (
        <>
        <header className="logo">
            <h3>Kenzie Hub</h3>
        </header>
        <div className="loginFormContainer">
        <LoginForm/>
            <div className="register">
                <h3>Ainda não possui uma conta?</h3>
                <button className="button_gray"><Link to={"/register"}>Cadastre-se</Link></button>
            </div>
        </div>
        </>
    )
}