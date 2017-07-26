import React, { Component } from 'react';
import Header from "../Header";
import "./../App.css"
import UserCard from "./UserCard";

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
		this.intervalListener = window.setInterval(function () {
			this.setTime();
		}.bind(this), 1000);
	}

	componentWillUnmount() {
		window.clearInterval(this.intervalListener);
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
				<div className="text-align-center">
				<span className="font-size-50">
					{this.state.currentTime}
				</span>
				</div>
				<div className="row no-margin">
					<div className="col-10">
						<UserCard userName="Max Mustermann" qualifications={["a", "b", "c"]}/>
					</div>
					<div className="col-2 estimated-time text-align-center">
						02:40
					</div>
				</div>
				<div className="row no-margin">
					<div className="col-10">
						<UserCard userName="Marta Mustermann" qualifications={["a", "b", "c"]}/>
					</div>
					<div className="col-2 estimated-time text-align-center">
						02:40
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;