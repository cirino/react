import React, { Component } from 'react';
import categorias from './Data/cat'
import './Categoria.css'

class Categorias extends Component {
	img = () => {
		let id = (Math.floor(Math.random()*20)).toString(8);
		return id
	}
	render() {
		
		return (
			<ul>
			{categorias.map((item, index) =>
				<li>
					{
						//<img src={`http://lorempixel.com/60/60/food/${this.img()}/`} alt={item.categoria} />
					}
					<a href="#/" onClick={this.props.categorias}>
						{item.classificacao} - {item.categoria}
					</a>
				</li>
			)}
			</ul>
		);
	}
}

export default Categorias; 