import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATED,
	EMPLOYEE_SAVED,
	EMPLOYEE_RESET
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_RESET:
			return INITIAL_STATE;
		case EMPLOYEE_SAVED:
			return INITIAL_STATE;
		case EMPLOYEE_CREATED:
			return INITIAL_STATE;
		case EMPLOYEE_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
