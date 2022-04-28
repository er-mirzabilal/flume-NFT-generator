import {Outlet, useNavigate} from "react-router-dom";
import {useWeb3React} from '@web3-react/core'

export default function ProtectedRoute({ redirectUrl = '/login'}){
    const {active, account}  = useWeb3React()
    let navigate  = useNavigate();
    console.log('active', active, account);
    // return (active) ? <Outlet /> : navigate(redirectUrl)
    return    <Outlet /> 

}