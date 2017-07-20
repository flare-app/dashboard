import React, {Component} from 'react';
import "./Administration.css";
import AddUserForm from "./AddUserForm";

class UserList extends Component {
	constructor(props) {
		super(props);
		this.showAddUser = this.showAddUser.bind(this);
		this.state = {
			addUserRendering: <div><a className="btn-click" onClick={(event) => this.showAddUser()}><i className="fa fa-user-plus" aria-hidden="true" />Benutzer hinzufügen</a></div>
		}
	}

	showAddUser() {
		this.setState({
			addUserRendering: <AddUserForm />
		});
	}

	render() {
		return (
			<ul style={{listStyle: "none"}}>
				<li style={{fontSize: "24px"}}>{this.state.addUserRendering}</li>
				<li style={{height: "48px", fontSize: "36px"}}><div>Horst</div></li>
				<li style={{height: "48px", fontSize: "36px"}}><div>Horst</div></li>
				<li style={{height: "48px", fontSize: "36px"}}><div>Horst</div></li>
			</ul>
		);
	}
}

export default UserList;
