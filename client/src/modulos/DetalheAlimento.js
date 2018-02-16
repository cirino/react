import React from 'react'

const DetalheAlimento = ( props ) => (
    <h4>
        {`
            energia kcal: ${props.energia.kcal} - 
            carboidrato: ${props.carboidrato} - 
            colesterol: ${props.colesterol} - 
            proteina: ${props.proteina} - 
            ferro: ${props.ferro} -
            sódio:  ${props.sodio}
            umidade: ${props.umidade} -
        `}
    </h4>
)

export default DetalheAlimento;