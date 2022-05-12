import {Outlet, useNavigate} from "react-router-dom";
import {useWeb3React} from '@web3-react/core'
import { useDispatch, useSelector } from "react-redux";
import { initializeCollectionSocket } from "../app/pages/Create-Collections/store/createCollectionSlice";
import { initializeSocket } from "../app/pages/store/authSlice";

export default function ProtectedRoute({ redirectUrl = '/login'}){
    const {socket} = useSelector((state)=> state.auth);
    const dispatch = useDispatch()
    // const {active, account}  = useWeb3React()
    // let navigate  = useNavigate();
    // return (active) ? <Outlet /> : navigate(redirectUrl)
    if(!socket) dispatch(initializeSocket());
    return    <Outlet /> 

}