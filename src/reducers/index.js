import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import uiReducer from './uiReducer';

const allReducers = combineReducers({
	task: taskReducer,
	ui: uiReducer
});

export default allReducers;
