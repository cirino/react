/*
  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }
*/   

import React, { Component } from 'react'
import './App.css'
import Categorias from './modulos/Categoria'
import Alimentos from './modulos/Alimento'
import { alimento } from './modulos/Data/alimento'

import SideBar from './modulos/Menu'
  
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modal: false,
      cat: 1,
      response: '',
      message: null,
      fetching: true
    }

    this.handleClickCategorias = this.handleClickCategorias.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

    componentDidMount() {
      fetch('/api/mensagem')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        })
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        })
      })
    }

    /*
    callApi = async () => {
      const response = await fetch('/api/mensagem');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      console.log('status http: ' + response.status)
      return body;
    };
    */

    handleClickCategorias = ( _id ) => {
      _id.preventDefault();
      let id = _id.target.textContent;
      this.setState ({      
        cat: parseInt(id, 10)
      })
      console.log(id)
    }

  render() {
    let cat = this.state.cat;

    return (

      <div data-js="App">
        
        <SideBar />
        <div className="site">

          <div className="container-box">
            <header className="box">
              <h1 className="tituloLogo">CPIX Design - Tabela de nutrientes alimentares completa</h1>
              <p className="App-intro">
                {this.state.fetching
                  ? 'Recuperando dados da API'
                  : this.state.message}
                </p>
            </header>

            <aside className="box">
              <Categorias categorias={this.handleClickCategorias} />
            </aside>

            <main className="box">
              {
                alimento.filter((item) => item.classificacao === cat).map((item, index) => (
                  <Alimentos
                    key={item._id}
                    {...item} 
                    //toggle={this.toggle}
                    //stateModal={this.state.modal}
                  />
                ))
              }
            </main>

            <footer className="box">Atualizado. v0.1.2</footer>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
