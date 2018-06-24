import React, { Component } from "react";
import './Landing.css';
import {
	HelpBlock,
	FormGroup,
	FormControl,
	ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/Signup/LoaderButton";



export default class Landing extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			email: "",
			password: "",
			confirmPassword: "",
			newUser: null
		};
	}






	validateForm() {
		return (
			this.state.email.length > 0 &&
			this.state.password.length > 0 &&
			this.state.password === this.state.confirmPassword
		);
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = async event => {
		event.preventDefault();

		this.setState({ isLoading: true });

		this.setState({ newUser: "test" });

		this.setState({ isLoading: false });
	}

	handleConfirmationSubmit = async event => {
		event.preventDefault();

		this.setState({ isLoading: true });
	}

	renderConfirmationForm() {
		return (
			<form onSubmit={this.handleConfirmationSubmit}>
				<HelpBlock>You have Sucessfully registered!</HelpBlock>
			</form>
		);
	}


	render() {
		return (
			<div className="container-fluid" id="landing">

				<div className="row fullh">

					<div className="col-sm-12 col-md-6 fullh" id="leftpanel">

						<div id="landingImage" className="fullh">
						</div>
						<p>This is some stuff!!!</p>
						<p>This is some stuff!!!</p>
						<p>This is some stuff!!!</p>
						<p>This is some stuff!!!</p>

					</div>

					<div className="col-sm-12 col-md-6 fullh" id='rightpanel'>
						<form onSubmit={this.handleSubmit}>
							<FormGroup controlId="email" bsSize="large">
								<ControlLabel>Email</ControlLabel>
								<FormControl
									autoFocus
									type="email"
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</FormGroup>
							<FormGroup controlId="password" bsSize="large">
								<ControlLabel>Password</ControlLabel>
								<FormControl
									value={this.state.password}
									onChange={this.handleChange}
									type="password"
								/>
							</FormGroup>
							<FormGroup controlId="confirmPassword" bsSize="large">
								<ControlLabel>Confirm Password</ControlLabel>
								<FormControl
									value={this.state.confirmPassword}
									onChange={this.handleChange}
									type="password"
								/>
							</FormGroup>
							<LoaderButton
								block
								bsSize="large"
								disabled={!this.validateForm()}
								type="submit"
								isLoading={this.state.isLoading}
								text="Signup"
								loadingText="Signing up…"
							/>
						</form>






					</div>
				</div>
			</div>
		);
	}


}
