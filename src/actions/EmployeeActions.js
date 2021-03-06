import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATED, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVED, EMPLOYEE_RESET } from './types';

export const employeeUpdateAction = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeeResetAction = () => {
	return {
		type: EMPLOYEE_RESET
	};
};

export const employeeFetchAction = () => {
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

export const employeeCreateAction = ({ name, phone, shift }) => {
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

export const employeeSaveAction = ({ name, phone, shift, uid }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database()
			.ref(`/users/${currentUser.uid}/employees/${uid}`)
			.set({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_SAVED });
				Actions.pop({ type: 'reset' });
			})
			.catch((error) => { console.log(error); });
	};
};
