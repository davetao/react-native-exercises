import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

// these are the state definitiions
export default combineReducers({
	auth: AuthReducer,
	employeeForm: EmployeeFormReducer,
	employeeList: EmployeeListReducer
});
