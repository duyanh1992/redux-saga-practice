import { fork, take, call, put, delay } from 'redux-saga/effects';
import * as actionTypes from './../constants/task';
import { getList } from './../apis/task';
import { STATUS_CODE } from './../constants';
import { fetchTaskSuccess, fetchTaskError } from './../actions/task';
import { showGlobalLoading, hideGlobalLoading } from './../actions/ui';

function* watchFetchTaskListAction() {
	while(true) {
		yield take(actionTypes.FETCH_TASK_FIRST);
		yield put(showGlobalLoading());

		const response = yield call(getList);
		const { data, status } = response;

		if(STATUS_CODE.SUCCESS === status) {
			yield put(fetchTaskSuccess(data));
		}
		else {
			yield put(fetchTaskError());
		}

		yield delay(3000);
		yield put(hideGlobalLoading());
	}	
}

function* watchCreateTaskAction() {
}

function* rootSaga() {
	yield fork(watchFetchTaskListAction);
	yield fork(watchCreateTaskAction);
}

export default rootSaga;
