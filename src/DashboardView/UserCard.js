import React, { Component } from 'react';
import './../App.css';

class UserCard extends Component {
	render() {
		return (
			<div className="row justify-content-between user-card">
				<div className="col-4">
					<span className="margin-right">Name</span>
					<span>
						<i
							className="fa fa-user fa-lg"
							aria-hidden="true"></i>
						<i
							className="fa fa-user fa-lg"
							aria-hidden="true"></i>
						<i
							className="fa fa-user fa-lg"
							aria-hidden="true"></i>
					</span>
				</div>
				<div className="col-4">
					Time to arrival:
				</div>
			</div>
		);
	}
}

export default UserCard;
