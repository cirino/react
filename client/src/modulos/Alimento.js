import React, { Component } from 'react'
import DetalheAlimento from './DetalheAlimento'
import './Alimento.css'

class Alimentos extends Component {
    render(){
        return (
           <div className="alimentosTitulo">
                <h2>
                    <a href='#' onClick={() => {}}>
                        {this.props.descricao}
                    </a>
                </h2>
                
                <DetalheAlimento
                    key={this.props._id}
                    {...this.props}
                />
            </div>
        )
    }
}

export default Alimentos;