// setup the scenes here...
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
	return (
		<Router>
			<Scene hideNavBar key="login" component={LoginForm} title="Please login" />
		</Router>
	);
};

export default RouterComponent;
