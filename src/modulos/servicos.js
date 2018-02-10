import React from 'react'

const Servicos = ( { name }) => (
    <h2>{` ${name} `}</h2>
)

Servicos.defaultProps = {
  name: 'Servicos'
}

export default Servicos;