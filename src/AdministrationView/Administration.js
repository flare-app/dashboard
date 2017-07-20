import React, { Component } from 'react';
import Header from "../Header";
import UserList from "./UserList";

class Administration extends Component {
	render() {
		return (
			<div>
				<Header changeView={this.props.changeView}/>
				<div className="container-fluid">
					<UserList />
				</div>
			</div>
		);
	}
}

export default Administration;