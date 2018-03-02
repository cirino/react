import React from 'react'
import Menu from './Menu'

export default props => (
    <div>
        <header>
            <h1 className="tituloLogo">{ props.title } <small>- { props.subtitle }</small></h1>
        </header>
        <Menu />
    </div>
);
