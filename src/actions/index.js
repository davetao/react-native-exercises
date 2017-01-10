import firebase from 'firebase';
import {
	LOGIN_USER,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED
} from './types';

export const emailChangedAction = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChangedAction = (password) => {
	return {
		type: PASSWORD_CHANGED,
		payload: password
	};
};

const loginUserFailed = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAILED });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		firebase.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => {
				firebase.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch(() => loginUserFailed(dispatch));
			});
	};
};
