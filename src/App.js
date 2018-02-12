import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Title from './title'
import Categorias from './modulos/Categoria'
import Alimentos from './modulos/Alimento'
import { categoria } from './categoria'
import { alimento } from './alimento'

import SideBar from './modulos/Menu'

import {slide as Menu} from 'react-burger-menu';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

      filtroAlimento: alimento.filter((item) => item._id === 27),
      filtroCategoria: categoria.filter((item) => item.classificacao <= 3),

      cat: 4
      
    }

    this.handleClicka = this.handleClicka.bind(this);
  }

  handleClicka ( _id ) {
    let id = _id.target.textContent;
    this.setState ({      
      cat: parseInt(id)
    })
  }

  ActionAlimento( id, classificacao, descricao ) {
    function handleClick(e) {
      e.preventDefault();
      console.log('Id: ' + id );
    }

    return <a href="#" onClick={handleClick}>
      {id} - {classificacao} - {descricao}
    </a>
  }

  ActionClassificacaoAlimento( id, classificacao, descricao ) {
    function handleClick(e) {
      e.preventDefault();
      console.log('Classificacao: ' + classificacao );
    }

    return <a href="#" onClick={handleClick}>
      {id} - {classificacao} - {descricao}
    </a>
  }

  getMenu() {
    let jsx;

    let items = [
      <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
      <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
      <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
      <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
      <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
      <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
    ];

  }

  render() {
    let filtroCategoria = this.state.filtroCategoria
    let filtroClassificacaoAlimento = this.state.filtroClassificacaoAlimento
    let filtroAlimento = this.state.filtroAlimento
    let a = this.state.cat

    return (

      <div data-js="App">
        
        <SideBar />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title className="App-title" name='Versão Beta - React' />
        </header>

        <p>
            {filtroCategoria.map((item, index) =>
              <li>filtroCategoria - onclick <a href="#" onClick={this.handleClicka.bind( item.classificacao )}>
                {item.classificacao}</a>
              </li>
            )}
        </p>
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
        
        <div>
          {categoria.map((servicos, index) => (
              <Categorias key={index}  name={servicos.categoria} />
          ))}
        </div>

        <div>
          {alimento.map((item, index) => (
              <Alimentos
                key={index}
                id={item._id}
                classificacao={item.classificacao}
                descricao={item.descricao} />
          ))
        }
        </div>

        <p className="App-intro">
          Atualizado. v0.0.7
        </p>
      </div>
    );
  }
}

export default App;
