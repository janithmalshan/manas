import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Ui/Navbar/navbar";
import {Home} from "./components/Home/home";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
    </div>
  );
}

export default App;
