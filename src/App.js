import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAwsoAqpUQcuDC23ZQ83H2DmevdcnMZ9Qg',
			authDomain: 'rn-manager-project.firebaseapp.com',
			databaseURL: 'https://rn-manager-project.firebaseio.com',
			storageBucket: 'rn-manager-project.appspot.com',
			messagingSenderId: '364197991367'
		});
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>Hello</Text>
					<LoginForm/>
				</View>
			</Provider>
		);
	}
}

export default App;
