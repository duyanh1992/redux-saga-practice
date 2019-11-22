import * as taskApis from './../apis/task';
import * as actionsTypes from './../constants/task';

export const fetchTaskFirst = () => {
	return {
		type: actionsTypes.FETCH_TASK_FIRST
	}
};

export const fetchTaskSuccess = data => {
	return {
		type: actionsTypes.FETCH_TASK_SUCCESS,
		payload: {
			data
		}
	}
};

export const fetchTaskError = () => {
	return {
		type: actionsTypes.FETCH_TASK_ERROR
	}
};