import React, { Component } from 'react';
import axios from 'axios'

class DetalheAlimento extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      tabelaX: {__html: ''}
    }

    this.focusTextInput = this.focusTextInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({id: event.target.value});
  }

  focusTextInput = ( id ) => {     
    id.preventDefault();   
    var tabela;
    
    var params = new URLSearchParams();
    params.append('numero', this.state.id);

     axios.post('http://nware.com.br/tbca/tbca/model/itemProdutoMedDAO.php', params, { mode: "no-cors"})
      .then((response) => {
        tabela =  response.data;

        this.setState({
          tabelaX: {__html: tabela}
        });

        var rmElemento = document.querySelectorAll("main > div > div > div > button");
        
        Array.prototype.forEach.call( rmElemento, function( node ) {
          node.parentNode.removeChild( node );
        });

        return tabela;        
      }
    )
  }

  componentDidMount() {
    const { match } = this.props 
    
    var tabela;
    var idX = (match.params.id !== '') ? match.params.id : '1'
    
    var paramsAdd = new URLSearchParams();
    paramsAdd.append('numero', idX );

     axios.post('http://nware.com.br/tbca/tbca/model/itemProdutoMedDAO.php', paramsAdd)
      .then((response) => {
        tabela =  response.data;

        this.setState({
          id: idX,
          tabelaX: {__html: tabela}
        });

        var rmElemento = document.querySelectorAll("main > div > div > div > button");
        
        Array.prototype.forEach.call( rmElemento, function( node ) {
          node.parentNode.removeChild( node );
        });       
      }      
    ).catch(e => {
      this.setState({
        tabelaX: {__html: '<h2>Não foi possível localizar o item por erro no servidor</h2>'}
      })
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.id} onChange={this.handleChange} />
        <input
          type="button"
          value="Código do alimento"
          onClick={this.focusTextInput}
        />

        <div dangerouslySetInnerHTML={this.state.tabelaX} />

      </div>
    );
  }
}

export default DetalheAlimento;
