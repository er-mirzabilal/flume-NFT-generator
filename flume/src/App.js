import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './app/pages/Home/Home'
// import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
