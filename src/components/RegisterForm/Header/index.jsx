import { Link } from "react-router-dom";
import "./style.scss"
import "../../../styles/globalButtonsStyles.scss"

export const Header = () =>  {
    return (
        <header>
            <h1>DyLuck Hub</h1>
            <button className="button_gray"><Link to={"/"}>Voltar</Link></button>
        </header>
    )
}