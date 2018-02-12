import React from 'react'

const DetalheAlimento = ( props ) => (
    <h2>
        {`
            id: ${props._id} \n
            cat: ${props.classificacao} - 
            descrição: ${props.descricao} - 
            energia kcal: ${props.energia.kcal} - 
            proteina: ${props.proteina} - 
            umidade: ${props.umidade} -
            carboidrato: ${props.carboidrato} - 
            colesterol: ${props.colesterol} - 
            ferro: ${props.ferro} -
            sódio:  ${props.sodio}
        `}
    </h2>
)

export default DetalheAlimento;