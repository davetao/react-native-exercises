import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import myTheme from '../themes/myTheme';
import { employeeUpdateAction, employeeSaveAction } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdateAction({ prop, value });
		});
	}
	
	updateEmployee() {
		const { name, phone, shift } = this.props;
		this.props.employeeSaveAction({ name, phone, shift, uid: this.props.employee.uid });
	}
	
	deleteEmployee() {
	
	}
	
	render() {
		return (
			<Container theme={myTheme}>
				<Header>
					<Button transparent onPress={() => Actions.employeeList({ type: 'reset' })}>
						<Icon name="md-arrow-back" />
					</Button>
					<Title>Update Employee</Title>
					<Button transparent onPress={this.deleteEmployee.bind(this)}>
						<Icon name="md-remove-circle" />
					</Button>
					<Button transparent onPress={this.updateEmployee.bind(this)}>
						<Icon name="md-done-all" />
					</Button>
				</Header>
				<Content>
					<EmployeeForm />
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdateAction, employeeSaveAction })(EmployeeEdit);
