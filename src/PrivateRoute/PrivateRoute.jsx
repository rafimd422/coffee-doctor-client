import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"
import Login from "../Pages/Login/Login";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const { user } = useContext(AuthContext)
const location = useLocation()


if(user !==null){
        return children
        }
        else{
        return <Login state={location.pathname} />
        }




}

export default PrivateRoute
