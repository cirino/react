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
        cat: 1
      }

      this.handleClickCategorias = this.handleClickCategorias.bind(this);
      this.filho = this.filho.bind(this);
}

    filho = ( ) => { 
      alert('filho')

      console.log('teste completo' + this.state.cat)
    }

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
            </header>

            <aside className="box">
              <Categorias categorias={this.handleClickCategorias} />
            </aside>

            <main className="box">
              {
                alimento.filter((item) => item.classificacao === cat).map((item, index) => (
                  <Alimentos
                    key={item._id}
                    {...item} />
                ))
              }
            </main>

            <footer className="box">Atualizado. v0.1.1</footer>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
