import { RegisterForm } from "../../components/RegisterForm/RegisterForm"
import { Header } from "../../components/RegisterForm/Header"
import { api } from "../../services/api"
import { useContext } from "react"
import { AppContext } from "../../providers/appContext"

export const Register = () => {
    return (
        <>
        <Header />
        <RegisterForm/>
        </>
    )
}