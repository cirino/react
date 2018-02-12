import React from 'react'
import DetalheAlimento from './DetalheAlimento'
import { alimento } from '../alimento'

function changeFood(e) {
    let id = e.target.textContent;
    var foods = parseInt(id, 10);
    console.log('id ' + id)
    console.log('food ' + foods)
    return foods
}

const Alimentos = ( props ) => (
    <div>
        <h2>
            <a href="#" onClick={changeFood.bind( props._id )}>{`${props.descricao}`}</a>
        </h2>

        {
            alimento.filter((item) => item._id === props._id ).map((item, index) =>
                <DetalheAlimento
                    key={index}
                    {...item}
                />
            )
        }
    </div>
)

export default Alimentos;