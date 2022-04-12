
import { useMoralis } from "react-moralis";
import {Outlet, useNavigate} from "react-router-dom";
import Login from "../app/pages/Login/Login";


export default function ProtectedRoute({ redirectUrl = '/login'}){
    let navigate  = useNavigate();
    const {
        isAuthenticated,
        user,
    } = useMoralis();
    return (isAuthenticated && user) ? <Outlet /> : navigate(redirectUrl)

}