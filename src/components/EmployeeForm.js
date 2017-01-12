import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardItem, Text, Picker } from 'native-base';
import { connect } from 'react-redux';
import { employeeUpdateAction } from '../actions';
import { Field } from './common';

class EmployeeForm extends Component {
	
	componentWillMount() {
		const { name, phone, shift } = this.props;
		console.log({ name, phone, shift });
	}
	
	render() {
		return (
			<Card style={{ margin: 16, marginTop: 16 }}>
				<CardItem style={{ paddingTop: 8, paddingLeft: 16, paddingRight: 16, paddingBottom: 32 }}>
					<View>
						<Field
							label="Name"
							value={this.props.name}
							onChangeText={text => this.props.employeeUpdateAction({ prop: 'name', value: text })}
						/>
						<Field
							label="Phone"
							value={this.props.phone}
							onChangeText={text => this.props.employeeUpdateAction({ prop: 'phone', value: text })}
						/>
						
						<View style={{ flexDirection: 'row' }}>
							<Text style={styles.pickerTextStyle}>Shift</Text>
							<Picker
								mode="dropdown"
								style={styles.pickerStyle}
								selectedValue={this.props.shift}
								onValueChange={day => this.props.employeeUpdateAction({ prop: 'shift', value: day })}>
								<Picker.Item label="Select..." value="" />
								<Picker.Item label="Monday" value="Monday" />
								<Picker.Item label="Tuesday" value="Tuesday" />
								<Picker.Item label="Wednesday" value="Wednesday" />
								<Picker.Item label="Thursday" value="Thursday" />
								<Picker.Item label="Friday" value="Friday" />
								<Picker.Item label="Saturday" value="Saturday" />
								<Picker.Item label="Sunday" value="Sunday" />
							</Picker>
						</View>
					</View>
				</CardItem>
			</Card>
		);
	}
}

const styles = {
	pickerStyle: {
		flex: 3
	},
	pickerTextStyle: {
		flex: 1,
		width: 100,
		paddingTop: 8,
		paddingBottom: 8,
		color: '#808080'
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdateAction })(EmployeeForm);
