// setup the scenes here...
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="auth">
				<Scene key="login" hideNavBar initial component={LoginForm} />
			</Scene>
			<Scene key="main">
				<Scene key="employeeList" hideNavBar component={EmployeeList} />
				<Scene key="employeeCreate" hideNavBar component={EmployeeCreate} />
				<Scene key="employeeEdit" hideNavBar component={EmployeeEdit} />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
