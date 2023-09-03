import { RoutesMain } from "./routes/routesMain"
import "./styles/globalButtonsStyles.scss"
import "./styles/globalFontStyles.scss"
import "./styles/globalStyles.scss"
import "./styles/App.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <RoutesMain toast={ toast }/>
    <ToastContainer />
    </>
  )
}

export default App
