import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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