import React, { Component } from 'react';
import icon from '../resources/app-icon.svg';
import config from "../config/config";
import "../App.css";
import LoginUtils from "./LoginUtils";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unit: {
				city: "",
				name: ""
			},
			email: "",
			password: "",
			loginError: null,
		};

		this.renderErrorMessage = this.renderErrorMessage.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderCityUnitSelection = this.renderCityUnitSelection.bind(this);
	}

	renderErrorMessage() {
		if (this.state.loginError) {
			return (
				<div className="form-group alert alert-danger">
					{this.state.loginError}
				</div>
			);
		}
	}

	handleCityChange(event) {
		this.setState({
			city: event.target.value,
			loginError: null
		});
	}

	handleUnitChange(event) {
		this.setState({
			unit: event.target.value,
			loginError: null
		});
	}

	handleEmailChange(event) {
		this.setState({
			email: event.target.value,
			loginError: null
		});
	}

	handlePasswordChange(event) {
		this.setState({
			password: event.target.value,
			loginError: null
		});
	}

	handleSubmit(event) {
		const loginData = {
			email: this.state.email,
			password: this.state.password,
			unitCity: this.state.unit.city,
			unitName: this.state.unit.name
		};
		fetch(config.host + "/api/user/login", {
			method: "POST",
			body: JSON.stringify(loginData)
		}).then(function (response) {
			if (response.status === 500) {
				response.json().then(function (responseBody) {
					this.setState({
						loginError: responseBody.message
					});
				}.bind(this));
			} else if (response.status === 200) {
				response.json().then(function (responseBody) {
					const authToken = responseBody.response.authenticationToken;
					LoginUtils.logIn(authToken);
					this.props.redirect("");
				}.bind(this));
			} else {
				this.setState({
					loginError: "Ein unbekannter Fehler ist aufgetreten."
				});
			}
		}.bind(this))
			.catch(function (error) {
				this.setState({
					loginError: error.message
				});
			}.bind(this));
		event.preventDefault();

	}

	static composeInputString(unit) {
		return unit.city + " - " + unit.name;
	}

	renderCityUnitSelection() {
		if (!this.state.availableUnits) {
			return <div className="form-group row"><i className="fa fa-circle-o-notch fa-spin" style={{paddingLeft: "20px", paddingRight: "20px"}}/><div>Loading...</div></div>
		}
		return (
			<div className="form-group">
				<select className="form-control" required={true} value={LoginForm.composeInputString(this.state.unit)}
				        onChange={this.handleCityChange}>
					<option value="" disabled>Wähle deine Stadt und Einheit</option>
					{this.state.availableUnits.map((unit) => {
						return <option
							value={LoginForm.composeInputString(unit)}>{LoginForm.composeInputString(unit)}</option>;
					})}
				</select>
			</div>
		);
	}

	render() {
		fetch(config.host + "/api/unit/list", {
			method: "GET"
		}).then(function (response) {
			if (response.status === 200) {
				response.json().then(function (responseBody) {
					this.setState({availableUnits: responseBody.response});
				}.bind(this));
			}
		}.bind(this));

		return (
			<div className="d-flex flex-column justify-content-center vh-80">
				<div className="d-flex justify-content-center mb-5">
					<img src={icon} className="app-icon" alt="icon"/>
				</div>
				<div className="d-flex justify-content-center">
					<form className="login-form">
						{this.renderErrorMessage()}
						{this.renderCityUnitSelection()}
						<div className="form-group">
							<input className="form-control"
							       type="email"
							       value={this.state.email}
							       onChange={this.handleEmailChange}
							       placeholder="E-Mail"
							       required={true}/>
						</div>
						<div className="form-group mb-4">
							<input className="form-control"
							       type="password"
							       value={this.state.password}
							       onChange={this.handlePasswordChange}
							       placeholder="Passwort"
							       required={true}/>
						</div>
						<input className="btn btn-success full-width-button btn-click" onClick={this.handleSubmit}
						       type="submit" value="Login" />
					</form>
				</div>
			</div>
		);
	}
}

export default LoginForm;