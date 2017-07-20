import React, { Component } from 'react';
import './../App.css';

class UserCard extends Component {
	render() {
		return (
			<div className="row justify-content-between user-card">
					<span className="col-10">{this.props.userName}</span>
					<span className="col-2 ">
						<div className="row align-items-center full-height">
						<i
							className="col fa fa-user fa-lg"
							aria-hidden="true"></i>
						<i
							className="col fa fa-user fa-lg"
							aria-hidden="true"></i>
						<i
							className="col fa fa-user fa-lg"
							aria-hidden="true"></i>
						</div>
					</span>
			</div>
		);
	}
}

export default UserCard;
