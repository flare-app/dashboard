import React, {Component} from "react";

class AddUserForm extends Component {
	render() {
		return (
			<div className="d-flex justify-content-center">
				<form className="login-form">
					<div className="form-group mb-2">
						<input className="form-control"
						       type="text"
						       placeholder="Vorname"
						       required={true} />
					</div>
					<div className="form-group mb-2">
						<input className="form-control"
						       type="text"
						       placeholder="Nachname"
						       required={true} />
					</div>
					<div className="form-group mb-2">
						<input className="form-control"
						       type="email"
						       placeholder="E-Mail"
						       required={true} />
					</div>
					<div className="form-group mb-2">
						<input className="form-control"
						       type="password"
						       placeholder="Passwort"
						       required={true} />
					</div>
					<div className="form-group mb-2">
						<input className="form-control"
						       type="password"
						       placeholder="Passwort wiederholen"
						       required={true} />
					</div>
					<div className="form-group form-check mb-2">
						<label className="form-check-label">Administratorrechte vergeben?
						</label>
						<input
							className="form-check-input"
							type="checkbox"/>
					</div>
					<div className="form-group mb-2 row">
						<div className="col-3">
							<div className="skill-icon-container-active">
								<div className="skill-icon-content">
									<i className="fa fa-user" aria-hidden="true" />
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="skill-icon-container-active">
								<div className="skill-icon-content">
									<i className="fa fa-user" aria-hidden="true" />
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="skill-icon-container">
								<div className="skill-icon-content">
									<i className="fa fa-user" aria-hidden="true" />
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="skill-icon-container">
								<div className="skill-icon-content">
									<i className="fa fa-user" aria-hidden="true" />
								</div>
							</div>
						</div>
					</div>
					<input className="btn btn-success full-width-button btn-click" type="submit" value="Speichern" />
				</form>
			</div>
		);
	}
}

export default AddUserForm;