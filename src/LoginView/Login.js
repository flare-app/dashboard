import LoginForm from "./LoginForm";
import Header from "../Header";
import React, {Component} from "react";

class Login extends Component {
	cons

	render() {
		return (
			<div>
				<Header changeView={this.props.changeView} />
				<LoginForm redirect={this.props.redirect} />
			</div>
		)
	}
}

export default Login;