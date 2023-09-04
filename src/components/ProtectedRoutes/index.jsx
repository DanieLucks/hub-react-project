import { useContext } from "react"
import { AppContext } from "../../providers/appContext"
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { user } = useContext( AppContext );

    return (
     user ? <Outlet /> : <Navigate to="/" />
     )
}