import {useLocation, Redirect} from "react-router-dom";
import {useWeb3React} from '@web3-react/core'
import { useDispatch, useSelector } from "react-redux";
import { initializeCollectionSocket } from "../app/pages/Create-Collections/store/createCollectionSlice";
import { initializeSocket } from "../app/pages/store/authSlice";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { connectors } from '../app/utils/connectors';
const isAuthorized = () => {
    const token = localStorage.getItem('flume_auth_token');
    const notifyToken  = localStorage.getItem('flume_notify_token');
    if(token && notifyToken) {
        return true
    }
    return false;
}
export default function ProtectedRoute(props){
    const location = useLocation();
    console.log(location, 'location');
    const {active, activate} = useWeb3React();
    const {isSocketInit} = useSelector((state)=> state.auth);

    const dispatch = useDispatch()
    if(isAuthorized()){
        console.log(active,)
        if(!active) activate(connectors.injected);
        if(!isSocketInit) dispatch(initializeSocket());
        return <Route {...props} />
    }
    return <Redirect to={{pathname: "/login", state: {from: location}}} />
//    if(isAuthorized()){
//        console.log('isAuthorized');
//     //    if(!active) activate();
//     //     if(!isSocketInit) dispatch(initializeSocket());
//         return <Outlet />
//    }
//    return <Navigate replace to={redirectUrl} />
}