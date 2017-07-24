import React, { Component } from 'react'
import icon from "./../resources/app-icon.svg"
import './../App.css';

class UserCard extends Component {
	render() {
		return (
			<div className="row justify-content-between user-card">
					<span className="col-10">{this.props.userName}</span>
					<span className="col-2 ">
						<div className="row align-items-center full-height">
							{this.props.qualifications.map((qual, index) => {
								return <div className="col" key={index}> <img className="d-block"src={icon} height="20px" width="20px"/></div>;
							})}
						</div>
					</span>
			</div>
		);
	}
}

export default UserCard;
