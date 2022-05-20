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


// import './App.css';
import ProtectedRoute from './Route/ProtectedRoute'

const Test = () => {
  console.log('test');
  return (
    <div> Test</div>
  )
}


function App() {
    // const location = useLocation();

    useEffect(() => {
      if(window.ethereum){
        // console.log('ethereum');333333333untsChanged', updateAccount)
        window.ethereum.on('accountsChanged', updateAccount)
        window.ethereum.on('networkChanged', updateNetwork)
        window.ethereum.on("chainChanged", updateChain)
      }
    }, [])
    
    const updateAccount = (data) => {
      console.log('on updateAccount', data);
    }
    const updateNetwork = (data) => {
      console.log('on updateNetwork', data);
    }
    const updateChain = (data) => {
      console.log('on updateChain', data);
    }
    
  return (
    <div className="App min-w-[435px] font-poppins">
                <Router>
                  <Switch>
                  <Route exact path="/" >
                    <Home/>
                  </Route>
                  <Route path="/login" >
                    <Login />
                  </Route>
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
                 
                </Switch>
                </Router>
        <CustomizedSnackbar />
    </div>
  );
}

export default App;
