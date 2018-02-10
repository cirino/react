import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Title from './title.js'
import Servicos from './modulos/servicos.js'

class App extends Component {
  render() {
    return (
      <div data-js="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title className="App-title" name='Versão Beta - React' />
        </header>
        <p className="App-intro">
          {['SMS', 'API', 'EMAIL', 'API', 'APPS'].map((servicos, index) => (
              <Servicos key={index}  name={servicos} />
            ))}
        </p>
        <p className="App-intro">
          Atualizado. v0.0.6b
        </p>
      </div>
    );
  }
}

export default App;
