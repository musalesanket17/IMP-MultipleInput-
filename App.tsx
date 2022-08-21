import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Costominput } from './componenta/costominput';

function App() {
   const handleChange =(otp:string)=>{
         console.log(otp)
  }
  return (
    <>
      <Costominput totalinput={4} handleChnage={handleChange} />
    </>
  );
}

export default App;
