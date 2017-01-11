import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
	email: 'email@test.com',
	password: 'password',
	user: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER_FAILED:
			return { ...state, password: '', error: 'Authentication failed', loading: false };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case EMAIL_CHANGED:
			return { ...state, email: action.payload, error: '', loading: false };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload, error: '', loading: false };
		case LOGIN_USER:
			return { ...state, loading: true };
		default:
			return state;
	}
};
