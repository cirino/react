import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../App'
import Sobre from '../pages/sobre'
import Outra from '../pages/outra'
import Contato from '../pages/contato'
import Teste from '../pages/teste'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/outra" component={Outra} />
      <Route path="/contato" component={Contato} />
      <Route path="/teste" component={Teste} />
    </div>
  </Router>
);

export default App;