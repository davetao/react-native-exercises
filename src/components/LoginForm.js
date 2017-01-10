import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Card, CardItem, Button } from 'native-base';
import { Field } from './common';
import { emailChangedAction, passwordChangedAction } from '../actions/';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChangedAction(text);
	}

	onPasswordChange(pwd) {
		this.props.passwordChangedAction(pwd);
	}

	render() {
		return (
			<Container style={{ margin: 16 }}>
				<Content>
					<Card>
						<CardItem>
							<View style={{ marginTop: 8 }}>
								<Field
									onChangeText={this.onEmailChange.bind(this)}
									value={this.props.email}
									label="Email"
									placeholder="email@domain.com"
								/>
								<Field
									secureTextEntry
									onChangeText={this.onPasswordChange.bind(this)}
									value={this.props.password}
									label="Password"
									placeholder="minimum 6 characters"
								/>
							</View>
							<Button style={{ margin: 16 }}>
								Log in / Register
							</Button>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { emailChangedAction, passwordChangedAction })(LoginForm);
