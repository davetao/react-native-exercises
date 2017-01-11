import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Card, CardItem, Button, Icon, Text, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Field } from './common/Field';
import myTheme from '../themes/myTheme';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
	
	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift });
	}
	
	render() {
		console.log(this.props.employee);
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
					<Card style={{ margin: 16, marginTop: 16 }}>
						<CardItem style={{ paddingTop: 8, paddingLeft: 16, paddingRight: 16, paddingBottom: 32 }}>
							<View>
								<Field
									label="Name"
									placeholder="Jane"
									value={this.props.name}
									onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
								/>
								<Field
									label="Phone"
									placeholder="555-555-5555"
									value={this.props.phone}
									onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
								/>
								
								<View style={{ flexDirection: 'row' }}>
									<Text style={styles.pickerTextStyle}>Shift</Text>
									<Picker
										mode="dropdown"
										style={styles.pickerStyle}
										selectedValue={this.props.shift}
										onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}>
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
				</Content>
			</Container>
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
