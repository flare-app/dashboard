import React, {Component} from "react";
import "./../App.css";

class AddUserForm extends Component {
	constructor(props) {
		super(props);

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSkillChange = this.handleSkillChange.bind(this);
		this.getSkillIconClassName = this.getSkillIconClassName.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			skills: {},
			firstName: {
				value: "",
				error: null
			},
			lastName: {
				value: "",
				error: null
			},
			email: {
				value: "",
				error: null
			}
		}
	}

	handleFirstNameChange(event) {
		this.setState({
			firstName: event.target.value,
			error: null
		});
	}

	handleLastNameChange(event) {
		this.setState({
			lastName: event.target.value,
			error: null
		});
	}

	handleEmailChange(event) {
		this.setState({
			email: event.target.value,
			error: null
		});
	}

	handleSkillChange(skillName) {
		let currentSkills = this.state.skills;
		currentSkills[skillName] = !currentSkills[skillName];
		this.setState({skills: currentSkills});
	}

	getSkillIconClassName(skillName) {
		if (this.state.skills[skillName]) {
			return "skill-icon-container-active";
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div className="d-flex justify-content-center">
				<form className="login-form">
					<div className="form-group mb-2">
						<input className="form-control"
						       type="text"
						       value={this.state.firstName.value}
						       onChange={this.handleFirstNameChange}
						       placeholder="Vorname"
						       required={true} />
					</div>
					<div className="form-group mb-2">
						<input className="form-control"
						       type="text"
						       value={this.state.lastName.value}
						       onChange={this.handleLastNameChange}
						       placeholder="Nachname"
						       required={true} />
					</div>
					<div className="form-group mb-2">
						<input className="form-control"
						       type="email"
						       value={this.state.email.value}
						       onChange={this.handleEmailChange}
						       placeholder="E-Mail"
						       required={true} />
					</div>
					<div className="form-group mb-2">
						<div className="form-check">
							<label className="form-check-label form-radio-label">
								<input className="form-check-input" type="radio" name="authorizationSelection" id="externalUser" value="externalUser" />
								<div style={{marginTop: "3px"}}>Externer Nutzer</div>
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input className="form-check-input" type="radio" name="authorizationSelection" id="appUser" value="appUser" defaultChecked/>
								<div style={{marginTop: "3px"}}>App-Nutzer</div>
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input className="form-check-input" type="radio" name="authorizationSelection" id="dashboardUser" value="dashboardUser" />
								<div style={{marginTop: "3px"}}>Dashboard-Nutzer</div>
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input className="form-check-input" type="radio" name="authorizationSelection" id="localAdministrator" value="localAdministrator" />
								<div style={{marginTop: "3px"}}>Lokaler Administrator</div>
							</label>
						</div>
					</div>
					<div className="form-group mb-2 row">
						<div className="col-3">
							<a onClick={() => this.handleSkillChange("respirator")}>
								<div className={"skill-icon-container " + this.getSkillIconClassName("respirator")}>
									<div className="skill-icon-content">
										<i className="fa fa-user" aria-hidden="true" />
									</div>
								</div>
							</a>
						</div>
						<div className="col-3">
							<a onClick={() => this.handleSkillChange("operator")}>
								<div className={"skill-icon-container " + this.getSkillIconClassName("operator")}>
									<div className="skill-icon-content">
										<i className="fa fa-user" aria-hidden="true" />
									</div>
								</div>
							</a>
						</div>
						<div className="col-3">
							<a onClick={() => this.handleSkillChange("chief")}>
								<div className={"skill-icon-container " + this.getSkillIconClassName("chief")}>
									<div className="skill-icon-content">
										<i className="fa fa-user" aria-hidden="true" />
									</div>
								</div>
							</a>
						</div>
						<div className="col-3">
							<a onClick={() => this.handleSkillChange("hose")}>
								<div className={"skill-icon-container " + this.getSkillIconClassName("hose")}>
									<div className="skill-icon-content">
										<i className="fa fa-user" aria-hidden="true" />
									</div>
								</div>
							</a>
						</div>
					</div>
					<input className="btn btn-success full-width-button btn-click" onClick={this.handleSubmit} type="submit" value="Speichern" />
				</form>
			</div>
		);
	}
}

export default AddUserForm;