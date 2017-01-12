import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {
	
	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee });
	}
	
	render() {
		const { name } = this.props.employee;
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection style={{ padding: 8 }}>
						<Text>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
};

export default EmployeeListItem;
