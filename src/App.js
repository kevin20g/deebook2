import React, { Component } from 'react';
import Login from './Login';
import './App.css';
import Promesa from './promesa';
import BasicExample from './funciones';

class App extends Component {
  render() {
    return (
      <div>
         <br/>
        <h1 className="Titulo">DeeBook</h1>
        <br/>
        <center>
        <BasicExample></BasicExample>
      </center> 
     
      </div>
    );
  }
}

export default App;
