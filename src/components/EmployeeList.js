import React, { Component } from 'react';
import { List } from 'react-native';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';

import myTheme from '../themes/myTheme';

class EmployeeList extends Component {
	
	componentWillMount() {
		this.props.employeeFetch();
	}
	
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
				
				</Content>
			</Container>
		);
	}
}

export default connect(null, { employeeFetch })(EmployeeList);
