import {Outlet, useNavigate} from "react-router-dom";
import {useWeb3React} from '@web3-react/core'
import { useDispatch, useSelector } from "react-redux";
import { initializeCollectionSocket } from "../app/pages/Create-Collections/store/createCollectionSlice";
import { initializeSocket } from "../app/pages/store/authSlice";

export default function ProtectedRoute({ redirectUrl = '/login'}){
    const {isSocketInit} = useSelector((state)=> state.auth);
    const dispatch = useDispatch()

    if(!isSocketInit) dispatch(initializeSocket());
    return    <Outlet /> 

}