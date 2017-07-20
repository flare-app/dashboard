import React, { Component } from 'react';
import Header from "../Header";

class Dashboard extends Component {

	render() {
		return (
			<div>
				<Header changeView={this.props.changeView}/>
				Dashboard
			</div>
		);
	}
}

export default Dashboard;