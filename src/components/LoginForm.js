import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Card, CardItem, Button, Spinner, Icon } from 'native-base';
import myTheme from '../themes/myTheme';
import { Field } from './common';
import { emailChangedAction, passwordChangedAction, loginUser } from '../actions/';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChangedAction(text);
	}

	onPasswordChange(pwd) {
		this.props.passwordChangedAction(pwd);
	}

	onLogin() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	renderError() {
		if (this.props.error) {
			return (
				<Button bordered danger style={{ marginTop: 16, alignSelf: 'center' }}>
					{ this.props.error }
				</Button>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner color={myTheme.brandPrimary} style={{ alignSelf: 'center' }} />;
		}

		return (
			<Button style={{ margin: 16, marginLeft: 0 }} onPress={this.onLogin.bind(this)}>
				Log in / Register
			</Button>
		);
	}

	render() {
		return (

			<Container theme={myTheme}>
				<Header>
					<Button transparent>
						<Icon name='ios-menu' />
					</Button>
					<Title>Manager</Title>
				</Header>
				<Content>
					<Container style={{ margin: 16 }}>
						<Content>
							<Card>
								<CardItem style={{ paddingLeft: 16, paddingRight: 16 }}>
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

									{ this.renderError() }

									{ this.renderButton() }

								</CardItem>
							</Card>
						</Content>
					</Container>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, user } = auth;
	return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
	emailChangedAction, passwordChangedAction, loginUser
})(LoginForm);
