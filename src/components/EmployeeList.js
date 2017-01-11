import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import myTheme from '../themes/myTheme';

class EmployeeList extends Component {
	render() {
		return (
			<Container theme={myTheme}>
				<Header>
					<Title>Employees</Title>
					<Button transparent>
						<Icon name="md-menu" />
					</Button>
					<Button transparent onPress={() => Actions.employeeCreate()}>
						<Icon name="md-add" />
					</Button>
				</Header>
				<Content>
					<View>

					</View>
				</Content>
			</Container>
		);
	}
}

export default EmployeeList;
