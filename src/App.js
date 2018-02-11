import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Title from './title'
import Servicos from './modulos/servicos'
import Alimentos from './modulos/Alimento'
import { categoria } from './categoria'
import { alimento } from './alimento'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

      filtroAlimento: alimento.filter((item) => item._id === 31),
      filtroCategoria: categoria.filter((item) => item.classificacao <= 3),
      filtroClassificacaoAlimento: alimento.filter((item) => item.classificacao === 8)
      
    }

    //this.ActionCategoria = this.ActionCategoria.bind(this);
    //this.ActionAlimento = this.ActionAlimento.bind(this);
    //this.ActionClassificacaoAlimento = this.ActionClassificacaoAlimento.bind(this);
    this.handleClicka = this.handleClicka.bind(this);
  }

  handleClicka ( _id ) {

    console.log('handk ' + _id);
    this.setState ({      
      filtroClassificacaoAlimento: alimento.filter((item) => item.classificacao === _id)
      //filtroClassificacaoAlimento: alimento.filter((item) => item.classificacao === 5)
    })
  }

  ActionCategoria( id, categoria, image ) {
    console.log('Id - ' + id );
    return (<a href="#" onClick={this.handleClicka.bind( id )}>
      {id} - {categoria} - {image}
    </a>)
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

  render() {
    //let filtroCategoria = categoria.filter((item) => item.classificacao <= 3)
    //let filtroClassificacaoAlimento = alimento.filter((item) => item.classificacao === 7)
    //let filtroAlimento = alimento.filter((item) => item._id === 43)
    let filtroCategoria = this.state.filtroCategoria
    let filtroClassificacaoAlimento = this.state.filtroClassificacaoAlimento
    let filtroAlimento = this.state.filtroAlimento
    
    return (
      <div data-js="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title className="App-title" name='Versão Beta - React' />
        </header>
        <a href="#" onClick={this.handleClicka.bind( 7 )}>
          direto para o state
        </a>
        <p>
            {filtroCategoria.map((item, index) =>
              <li>filtroCategoria - função {this.ActionCategoria( item.classificacao, item.categoria, item.image )}
                {item.classificacao} - {item.categoria}
              </li>
            )}
        </p>
        <p>
            {filtroCategoria.map((item, index) =>
                <li>filtroCategoria - onclick <a href="#" onClick={this.handleClicka.bind( item.classificacao )}>
                  {item.classificacao}</a>
                </li>
            )}
        </p>
        <p>
            {filtroAlimento.map((item, index) => 
              <li>filtroAlimento {this.ActionAlimento(item._id, item.classificacao, item.descricao)}</li>
            )}
        </p>
        <p>
            {filtroClassificacaoAlimento.map((item, index) => 
              <li>filtroClassificacaoAlimento {this.ActionClassificacaoAlimento(item._id, item.classificacao, item.descricao)}</li>
            )}
        </p>
        
        <div>
          {categoria.map((servicos, index) => (
              <Servicos key={index}  name={servicos.categoria} />
          ))}
        </div>

        <div>
          {alimento.map((item, index) => (
              <Alimentos
                key={index}
                id={item._id}
                classificacao={item.classificacao}
                descricao={item.descricao} />
          ))}
        </div>

        <p className="App-intro">
          Atualizado. v0.0.7
        </p>
      </div>
    );
  }
}

export default App;
