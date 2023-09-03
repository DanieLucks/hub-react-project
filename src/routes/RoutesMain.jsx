import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { useState } from "react"

export const RoutesMain = ( { toast }) => {
    const [user, setUser] = useState(null);

    return (
        <Routes>
            <Route path="/" element={ <Login user={ user } setUser={ setUser } toast={ toast } /> } />
            <Route path="/register" element={ <Register toast={ toast }/> } />
            <Route path="/dashboard" element={ <Dashboard user={ user } setUser={ setUser } /> } />
        </Routes>
    )
} 