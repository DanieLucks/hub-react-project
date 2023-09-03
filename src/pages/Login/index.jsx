import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"
import "./style.scss"
import { api } from "../../services/api"

export const Login = ( { user, setUser, toast }) => {

    const navigate = useNavigate();

    const userLogin = async ( formData  ) => {
        try {
            const { data } = await api.post('/sessions', formData);

            const token = data.token;
            localStorage.setItem("@KenzieHub_token", token);

            setUser( data );

            navigate('/dashboard');
        } catch ( error ) {
            console.log(error);
            toast('Ops! Algo deu errado', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }

    return (
        <>
        <header className="logo">
            <h3>Kenzie Hub</h3>
        </header>
        <div className="loginFormContainer">
        <LoginForm userLogin={ userLogin }/>
            <div className="register">
                <h3>Ainda não possui uma conta?</h3>
                <button className="button_gray"><Link to={"/register"}>Cadastre-se</Link></button>
            </div>
        </div>
        </>
    )
}