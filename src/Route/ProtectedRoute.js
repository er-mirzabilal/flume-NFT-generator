import {Outlet, useNavigate} from "react-router-dom";
import {useWeb3React} from '@web3-react/core'

export default function ProtectedRoute({ redirectUrl = '/login'}){
    const {active}  = useWeb3React()
    let navigate  = useNavigate();
    
    return (active) ? <Outlet /> : navigate(redirectUrl)
    // return    <Outlet /> 

}