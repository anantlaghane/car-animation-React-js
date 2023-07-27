
import CarComponent from './components/CarComponent';
import Navbar from './components/Navbar';
import {Routes , Route, BrowserRouter } from 'react-router-dom'
import React from 'react';



function App() {

  return (
    <div>
     
    
      <BrowserRouter>
      <Navbar/>
      <CarComponent />
      
      </BrowserRouter>


    </div>
  );
}

export default App;
