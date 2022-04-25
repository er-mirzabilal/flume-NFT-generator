import React from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './app/pages/Home/Home';
import ViewCollection from './app/pages/View-Collections/view-collections';
import CreateCollection from './app/pages/Create-Collections/create-collections';
import Preview from './app/pages/Preview/Preview';
import  Login  from './app/pages/Login/Login';
// import './App.css';
import ProtectedRoute from './Route/ProtectedRoute'
function App() {
    const location = useLocation();
  return (
    <div className="App min-w-[435px] font-poppins">
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                 <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/view-collections" element={<ViewCollection/>}/>
                        <Route path="/create-collections" element={<CreateCollection/>}/>
                        <Route path="/preview-images" element={<Preview/>}/>
                    </Route>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

export default App;
