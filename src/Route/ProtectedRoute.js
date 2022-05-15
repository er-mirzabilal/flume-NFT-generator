import {Outlet, Navigate} from "react-router-dom";
import {useWeb3React} from '@web3-react/core'
import { useDispatch, useSelector } from "react-redux";
import { initializeCollectionSocket } from "../app/pages/Create-Collections/store/createCollectionSlice";
import { initializeSocket } from "../app/pages/store/authSlice";
const isAuthorized = () => {
    const token = localStorage.getItem('flume_auth_token');
    const notifyToken  = localStorage.getItem('flume_notify_token');
    if(token && notifyToken) {
        return true
    }
    return false;
}
export default function ProtectedRoute({ redirectUrl = '/login'}){
    const {active, activate} = useWeb3React();
    const {isSocketInit} = useSelector((state)=> state.auth);
    const dispatch = useDispatch()
   if(isAuthorized()){
       console.log('isAuthorized');
    //    if(!active) activate();
    //     if(!isSocketInit) dispatch(initializeSocket());
        return <Outlet />
   }
   return <Navigate replace to={redirectUrl} />
}