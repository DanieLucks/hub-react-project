import { Input } from "../Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./formSchema"
import "./style.scss"
import { useContext } from "react"
import { AppContext } from "../../providers/appContext"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
    const { userLogin } = useContext(AppContext)

    const { register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: zodResolver(formSchema)
    })

    const submit = (formData) => {
        console.log(formData)
        userLogin(formData);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h3>Login</h3>
            <Input label="Email:" type="email" placeholder="Digite seu email" error={errors.email} {...register("email")}/>

            <Input label="Senha:" type="password" placeholder="Digite sua senha" error={errors.password} {...register("password")}/>

            <button className="button" type="submit">Entrar</button>
        </form>
    )
}