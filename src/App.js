import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './app/pages/Home/Home';
import ViewCollection from './app/pages/View-Collections/view-collections';
import CreateCollection from './app/pages/Create-Collections/create-collections';
// import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view-collections" element={<ViewCollection />}></Route>
          <Route path="/create-collections" element={<CreateCollection />}></Route>
        </Routes>
    </div>
  );
}

export default App;
