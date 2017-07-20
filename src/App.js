import React, { Component } from 'react';
import LoginUtils from "./LoginView/LoginUtils";
import Login from "./LoginView/Login";
import Dashboard from "./DashboardView/Dashboard";
import Administration from "./AdministrationView/Administration";
import './App.css';
global.jQuery = require('jquery');
global.Tether = require('tether');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.min.css');;

class App extends Component {
	constructor() {
		super();
		this.changeView = this.changeView.bind(this);
		this.changeViewNotAllowed = this.changeViewNotAllowed.bind(this);
		this.state = {
			currentView: <Dashboard changeView={this.changeView}/>
		};
	}

	changeViewNotAllowed() {};


	changeView(newView) {
		switch(newView) {
			case "Admin":
				this.setState({
					currentView: <Administration changeView={this.changeView}/>
				});
				break;
			default:
				this.setState({
					currentView: <Dashboard changeView={this.changeView}/>
				});
				break;
		}

	}

	render() {
		if (!LoginUtils.isLoggedIn()) {
			return <Login changeView={this.changeViewNotAllowed}/>
		}
		return this.state.currentView;
	}
}

export default App;