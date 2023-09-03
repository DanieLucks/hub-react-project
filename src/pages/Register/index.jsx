import { RegisterForm } from "../../components/RegisterForm/RegisterForm"
import { Header } from "../../components/RegisterForm/Header"
import { api } from "../../services/api"

export const Register = ( { toast } ) => {
    const userRegister = async ( formData ) => {
        try {
            const { data } = await api.post('/users',formData);
            toast('Cadastro realizado com Sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } catch ( error ) {
            console.log(error)
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
        <Header />
        <RegisterForm userRegister={ userRegister }/>
        </>
    )
}