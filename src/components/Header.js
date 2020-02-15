import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link to="/productos" className="navbar-brand">
						React CRUD & Routing
					</Link>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink
								to="/productos"
								className="nav-link"
								activeClassName="active"
							>Productos</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/productos/nuevo"
								className="nav-link"
								activeClassName="active"
							>Nuevo Producto</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
}
