import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-js="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Versão Beta - SMS</h1>
        </header>
        <p className="App-intro">
          Atualizado. v0.0.6
        </p>
      </div>
    );
  }
}

export default App;
