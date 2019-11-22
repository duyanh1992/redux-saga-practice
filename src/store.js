
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const store = createStore(
	allReducers,
	applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
