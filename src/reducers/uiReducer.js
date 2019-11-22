import * as actionTypes from './../constants/ui';

const initialState = {
	isShow: false
};

const uiReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.GLOBAL_SHOW_LOADING: {
			return {
				...state,
				isShow: true
			};
		}

		case actionTypes.GLOBAL_HIDE_LOADING: {
			return {
				...state,
				isShow: false
			};
		}

		default: return state;
	}
}

export default uiReducer;
