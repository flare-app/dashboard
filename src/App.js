import React, { Component } from 'react';
import './App.css';
import LoginUtils from "./LoginView/LoginUtils";
import LoginForm from "./LoginView/LoginForm";
import Dashboard from "./DashboardView/Dashboard";
global.jQuery = require('jquery');
global.Tether = require('tether');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

class App extends Component {
	render() {
		if (!LoginUtils.isLoggedIn()) {
			return <LoginForm/>
		}
		return (
			<Dashboard/>
		);
	}
}

export default App;