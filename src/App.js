import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import LoginUtils from "./LoginView/LoginUtils";
import LoginForm from "./LoginView/LoginForm";
import Dashboard from "./DashboardView/Dashboard";
import Administration from "./AdministrationView/Administration";
global.jQuery = require('jquery');
global.Tether = require('tether');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.min.css');;

class App extends Component {
	constructor() {
		super();
		this.changeView = this.changeView.bind(this);
		this.state = {
			currentView: <Dashboard changeView={this.changeView}/>
		};
	}

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
			return <LoginForm/>
		}
		return this.state.currentView;
	}
}

export default App;