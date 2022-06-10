import {useLocation, Redirect} from "react-router-dom";
import {useWeb3React} from '@web3-react/core'
import { useDispatch, useSelector } from "react-redux";
import { initializeCollectionSocket } from "../app/pages/Create-Collections/store/createCollectionSlice";
import { initializeSocket } from "../app/pages/store/authSlice";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { connectors } from '../app/utils/connectors';
import { useEffect } from "react";
export const isAuthorized = () => {
    const token = localStorage.getItem('flume_auth_token');
    const notifyToken  = localStorage.getItem('flume_notify_token');
    if(token && notifyToken) {
        return true
    }
    return false;
}
export default function ProtectedRoute(props){
    const location = useLocation();
    const {active, activate, chainId} = useWeb3React();
    const {isSocketInit} = useSelector((state)=> state.auth);
    const dispatch = useDispatch()
    
    const path = location?.pathname;
    useEffect(()=>{
        if(!active) {
            activate(connectors.injected)
        };
        if(!isSocketInit) dispatch(initializeSocket());
    },[])
    if(isAuthorized() ){
       
        if(path && ( path === '/' || path === '/login')){
            return <Redirect to={{pathname: "/view-collections", state: {from: location}}} />
        }
        return <Route {...props} />
    }
    else {
        if(path && ( path === '/' || path === '/login')){
            return <Route {...props} />
        }
        return <Redirect to={{pathname: "/login", state: {from: location}}} />
    }
  

}