import React, { Component } from 'react'
import './App.css'
import Categorias from './modulos/Categoria'
import Alimentos from './modulos/Alimento'
import { alimento } from './alimento'
import categorias from './modulos/Data/cat'

import SideBar from './modulos/Menu'
  
function handleClicka ( _id ) {
    _id.preventDefault();
    let id = _id.target.textContent;
    this.setState ({      
      cat: parseInt(id, 10)
    })
  }

  class App extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        cat: 1
      }

    this.handleClicka = handleClicka.bind(this);
  }

  render() {
    let cat = this.state.cat
    const food = 99;
    console.log('food ' + food)

    return (

      <div data-js="App">
        
        <SideBar />
        <div className="site">

          <div className="container-box">
            <header className="box">
              <h1 className="tituloLogo">CPIX Design</h1>
            </header>

            <aside className="box">
              <Categorias />

              <p>
                {categorias.map((item, index) =>
                  <li>
                    <a href="/" onClick={this.handleClicka.bind( item.classificacao )}>
                    {item.classificacao} - {item.categoria}</a>
                  </li>
                )}
              </p>
            </aside>

            <main className="box">
              {
                alimento.filter((item) => item.classificacao === cat).map((item, index) => (
                  <Alimentos
                    key={index}
                    {...item} />
                ))            
              }

            </main>
            <footer className="box">Atualizado. v0.1.0</footer>
          </div>

          <div>
            
          </div>

          <p>
              {
                /*filtroAlimento.map((item, index) => 
                <li>filtroAlimento { this.ActionAlimento(item._id, item.classificacao, item.descricao)}</li>
              )*/
              }
          </p>
          <p>
              {/*
              alimento.filter((item) => item.classificacao === a).map((item, index) =>
                    <li>filtroClassificacaoAlimento
                    { this.ActionClassificacaoAlimento(item._id, item.classificacao, item.descricao)}</li>
                )*/
            }
          </p>

        </div>
      </div>
    );
  }
}

export default App;
