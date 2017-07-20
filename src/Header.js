import UserIcon from './user.svg'
import React, { Component } from 'react';
import './App.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	handleLinkClick(event, newView) {
		event.preventDefault();
		this.props.changeView(newView);
	}

	render() {
		return (
		<nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
				<span className="navbar-toggler-icon"></span>
			</button>
			<a className="navbar-brand abs" href="#">Flare</a>
			<div className="navbar-collapse collapse" id="collapsingNavbar">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" onClick={(event) => this.handleLinkClick(event, "Admin")} data-target="#myModal" data-toggle="modal">
							<i className="fa fa-user" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		);
	}
}

export default Header;
