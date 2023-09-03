import { useNavigate } from "react-router-dom"
import "./style.scss"
import { useEffect } from "react"

export const Dashboard = ( { user, setUser } ) => {

    const navigate = useNavigate()

    const exit = () => {
        localStorage.clear()
        setUser(null)
        navigate('/')
    }

    useEffect(() => {
        if (!localStorage.getItem("@KenzieHub_token")) {
            navigate('/');
        }
    }, []);

    return (
        <>
        <header>
            <h1>Kenzie Hub</h1>
            <button onClick={ exit } className="button_gray">Sair</button>
        </header>
        <div className="infos">
            <h3>Olá, { user ? user.user.name : "Usuário não identificado"}</h3>
            <p>{ user ? user.user.course_module : null}</p>
        </div>
        <h3>{`Que pena! estamos em desenvolvimento :(`} </h3>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </>
    )
}