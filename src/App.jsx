import { RoutesMain } from "./routes/routesMain"
import "./styles/globalButtonsStyles.scss"
import "./styles/globalFontStyles.scss"
import "./styles/globalStyles.scss"
import "./styles/App.scss"
import { ToastContainer } from "react-toastify";



const App = () => {
  return (
    <>
    <RoutesMain/>
    <ToastContainer />
    </>
  )
}

export default App
