import React from 'react';
import { Link } from "react-router-dom";

export default props => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">Versão Beta</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sobre">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/detalheAlimentos">Alimento</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contato</Link>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="Pesquisa..." />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-secondary btn-number">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                        <a  className="btn btn-success btn-sm ml-3">
                        <Link className="btn btn-success btn-sm ml-3" to="/outra">
                            <i className="fa fa-shopping-cart"></i> Cart
                            <span className="badge badge-light">3</span>
                        </Link>
                        </a>
                    </div>
                </form>

            </div>
        </div>
    </nav>
)