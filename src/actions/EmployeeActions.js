import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATED, EMPLOYEE_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeeFetch = () => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({
					type: EMPLOYEE_FETCH_SUCCESS,
					payload: snapshot.val()
				});
			});
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATED });
				Actions.pop({ type: 'reset' });
			})
			.catch((error) => { console.log(error); });
	};
};
