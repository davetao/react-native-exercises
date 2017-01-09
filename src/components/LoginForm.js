import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Button, H3 } from 'native-base';
import { Field } from './common';

class LoginForm extends Component {
	render() {
		return (
			<Container style={{ margin: 16 }}>
				<Content>
					<Card>
						<CardItem>
							<View style={{ marginTop: 8 }}>
								<H3 style={{ marginLeft: 16, marginTop: 8, marginBottom: 8 }}>Please sign in</H3>
								<Field
									label="Email"
									placeholder="email@domain.com"
								/>
								<Field
									label="Password"
									secureTextEntry
									placeholder="minimum 6 characters"
								/>
							</View>
							<Button style={{ margin: 16, alignSelf: 'center' }}>
								Log in / Register
							</Button>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default LoginForm;
