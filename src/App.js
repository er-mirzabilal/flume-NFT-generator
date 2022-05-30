import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './app/pages/Home/Home';
import ViewCollection from './app/pages/View-Collections/view-collections';
import LiveCollection from './app/pages/Live-Collection/live-collection';
import CreateCollection from './app/pages/Create-Collections/create-collections';
import Preview from './app/pages/Preview/Preview';
import  Login  from './app/pages/Login/Login';
import CustomizedSnackbar from './app/pages/Components/CustomizeStackBar.js/CustomizedSnackbar';
import {useWeb3React} from '@web3-react/core'


// import './App.css';
import ProtectedRoute from './Route/ProtectedRoute'
import { removeAuthLocalStorage } from './app/api/core';
import { useHistory } from 'react-router-dom';
import { contract_map } from './app/utils/constants';
import { showMessage } from './app/pages/store/messageSlice';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from './app/pages/404';




function App() {
  const {deactivate} = useWeb3React();
  const history = useHistory()
  const dispatch = useDispatch()
    // const location = useLocation();

    useEffect(() => {
      if(window.ethereum){
        window.ethereum.on('accountsChanged', updateAccount)
        window.ethereum.on('networkChanged', updateNetwork)
        window.ethereum.on("chainChanged", updateChain)
      }
    }, [])
    
    const updateAccount = (data) => {
      if(!data || (data && !data.length)){
        deactivate();
        removeAuthLocalStorage();
        history.push('/') 
      }
      console.log('on updateAccount', data);
    }
    const updateNetwork = (data) => {
      console.log('on updateNetwork', data);
    }
    const updateChain = (data) => {
      console.log('on updateChain', data);
      if(!contract_map[data]) dispatch(showMessage({message: 'You are connected to unsuported network!', severity: 'warning', autoHideDuration: 7000}))
    }
    
  return (
    <div className="App min-w-[435px] font-poppins">
                <Router>
                  <Switch>
                  <ProtectedRoute exact path="/" >
                    <Home/>
                  </ProtectedRoute>
                  <ProtectedRoute path="/login" >
                    <Login />
                  </ProtectedRoute>
                  <ProtectedRoute path="/view-collections">
                    <ViewCollection/>
                  </ProtectedRoute>
                  <ProtectedRoute path="/create-collections/:id" >
                    <CreateCollection/>
                  </ProtectedRoute>
                  <ProtectedRoute path="/preview-images/:id" >
                    <Preview/>
                  </ProtectedRoute>
                  <ProtectedRoute path="/live-collection/:id" >
                   <LiveCollection/>
                  </ProtectedRoute>
                  <Route path="/404" >
                    <NotFound />
                  </Route>
                  {/* <Redirect to="/404" /> */}
                </Switch>
                </Router>
        <CustomizedSnackbar />
    </div>
  );
}

export default App;
