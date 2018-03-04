import React from 'react'

export default props => (
    <header>
        <h1 className="tituloLogo">{ props.title } <small>- { props.subtitle }</small></h1>
    </header>
);
