import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

import myTheme from '../themes/myTheme';

class EmployeeList extends Component {
	
	componentWillMount() {
		this.props.employeeFetch();
		this.createDataSource(this.props);
	}
	
	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}
	
	createDataSource(props) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(props.employees);
	}
	
	renderRow(employee) {
		return <EmployeeListItem employee={employee} />;
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
					<ListView
						enableEmptySections
						dataSource={this.dataSource}
						renderRow={this.renderRow}
					/>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employeeList, (val, uid) => {
		return { ...val, uid }; // take the original value and add the uid
	});
	return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
