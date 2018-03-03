import React from 'react';

import Header from '../modulos/Header'
import Footer from '../modulos/Footer'

import Rotas from './routes'

export default props => (
    <div className="site">
        <Header title="CPIX Design" subtitle="Tabela de nutrientes alimentares completa" />

        <a href='https://api.whatsapp.com/send?phone=5511954968220&text=sua%20mensagem'>chat</a>
        
        <Rotas />

        <Footer />
    </div>
);
