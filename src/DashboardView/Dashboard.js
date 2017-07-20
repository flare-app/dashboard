import React, { Component } from 'react';
import Header from "../Header";
import "./../App.css"

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			currentTime: new Date().toLocaleTimeString()
		};
		this.setTime = this.setTime.bind(this);
	}

	componentWillMount() {
		this.setTime()
	}

	componentDidMount(){
		window.setInterval(function () {
			this.setTime();
		}.bind(this), 1000);
	}

	setTime() {
		this.setState({
			currentTime: new Date().toLocaleTimeString()
		})
	}

	render() {
		return (
			<div>
				<Header changeView={this.props.changeView}/>
				<div className="clock-container">
				<span className="clock">
					{this.state.currentTime}
				</span>
				</div>
			</div>
		);
	}
}

export default Dashboard;