import React, { Component } from 'react';
import Login from './Login';
import './App.css';
import Promesa from './promesa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <h1 className="Titulo">DeeBook</h1>
        <br/>
        <center>
        <Login></Login>
      </center>
      </div>
    );
  }
}

export default App;
