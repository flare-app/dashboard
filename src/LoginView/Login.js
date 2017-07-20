import LoginForm from "./LoginForm";
import Header from "../Header";
import React, {Component} from "react";

class Login extends Component {

	render() {
		return (
			<div>
				<Header changeView={this.props.changeView} />
				<LoginForm/>
			</div>
		)
	}
}

export default Login;