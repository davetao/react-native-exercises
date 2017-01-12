import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import myTheme from '../themes/myTheme';
import { employeeUpdateAction, employeeCreateAction } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	
	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreateAction({ name, phone, shift });
	}
	
	render() {
		return (
			<Container theme={myTheme}>
				<Header>
					<Button transparent onPress={() => Actions.pop()}>
						<Icon name="md-arrow-back" />
					</Button>
					<Title>Create Employee</Title>
					<Button transparent onPress={this.onButtonPress.bind(this)}>
						<Icon name="md-done-all" />
					</Button>
				</Header>
				<Content>
					<EmployeeForm {...this.props} />
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdateAction, employeeCreateAction })(EmployeeCreate);
