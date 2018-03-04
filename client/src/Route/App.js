import React from 'react';

import Header from '../modulos/Header'
import Footer from '../modulos/Footer'

import Rotas from './routes'

export default props => (
    <div className="site">
        <Header title="CPIX Design" subtitle="Tabela de nutrientes alimentares completa" />
        
        <Rotas />

        <Footer />
    </div>
);
