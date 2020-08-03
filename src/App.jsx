import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Ui/Navbar/navbar";
import {Home} from "./components/Home/home";
import {ThemeProvider} from '@material-ui/styles';
import {ThemeDefault} from './overrideMui/ThemeOverride';

function App() {
  return (
      <ThemeProvider theme={ThemeDefault}>
          <div className="App">
              <Navbar/>
              <Home/>
          </div>
      </ThemeProvider>
  );
}

export default App;
