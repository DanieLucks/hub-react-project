import "./style.scss"
import { useContext } from "react"
import { AppContext } from "../../providers/appContext"

export const Dashboard = () => {

    const { user, exit } = useContext(AppContext);

    return (
        <>
        <header>
            <h1>DyLuck Hub</h1>
            <button onClick={ exit } className="button_gray">Sair</button>
        </header>
        <div className="infos">
            <h3>Olá, { user ? user.name : "Usuário não identificado"}</h3>
            <p>{ user ? user.course_module : null}</p>
        </div>
        <h3>{`Que pena! estamos em desenvolvimento :(`} </h3>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </>
    )
}