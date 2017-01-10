import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}


export default App;
