import { createContext, useEffect, useState } from "react";
import { toast as showToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const toast = (message, options = {}) => {
        showToast(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            ...options,
        });
    };

    const userLogin = async ( formData ) => {
        try {
            const { data } = await api.post("/sessions", formData);

            const token = data.token;
            localStorage.setItem("@KenzieHub_token", token);

            setUser( data.user );
            navigate("/dashboard")
        } catch ( error ) {
            console.log(error);
            toast("Ops! Algo deu errado");
        }
    }

    const userRegister = async ( formData ) => {
        try {
            const { data } = await api.post("/users",formData);
            toast("Cadastro realizado com Sucesso!");
        } catch ( error ) {
            console.log(error)
            toast("Ops! Algo deu errado");
        }
    }

    const exit = () => {
        localStorage.clear()
        setUser(null)
        navigate("./")
    }

    useEffect(() => {
       const autoLogin = async () => {
        try {
            const token = localStorage.getItem("@KenzieHub_token");

            if (token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            const response = await api.get("/profile");
            setUser(response.data);
            navigate("/dashboard");
            } else {
            navigate("/");
            }
        } catch (error) {
            console.log(error);
            localStorage.clear();
            navigate("/");
        }
};


        autoLogin();
    }, []);


    return (
        <AppContext.Provider value={{ user, setUser, toast, userLogin, userRegister, exit, navigate }}>
            { children }
        </AppContext.Provider>
    )
}