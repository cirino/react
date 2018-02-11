import React from 'react'

const Alimentos = ( { _id, classificacao, descricao }) => (
    <h2>{` ${_id} - ${classificacao} - ${descricao} `}</h2>
)

Alimentos.defaultProps = {
    _id: '',
    classificacao: '',
    descricao: ''
}

export default Alimentos;