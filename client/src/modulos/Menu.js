import React from 'react';
import { Link } from "react-router-dom";

export default props => (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <Link class="navbar-brand" to="/">Versão Beta</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/sobre">Sobre</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/outra">Outra</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contato">Contato</Link>
                    </li>
                </ul>
    
                <form class="form-inline my-2 my-lg-0">
                    <div class="input-group input-group-sm">
                        <input type="text" class="form-control" placeholder="Pesquisa..." />
                        <div class="input-group-append">
                            <button type="button" class="btn btn-secondary btn-number">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <a  class="btn btn-success btn-sm ml-3">
                        <Link class="btn btn-success btn-sm ml-3" to="/teste">
                            <i class="fa fa-shopping-cart"></i> Cart
                            <span class="badge badge-light">3</span>
                        </Link>
                        </a>
                    </div>
                </form>
    
            </div>
        </div>
    </nav>
)