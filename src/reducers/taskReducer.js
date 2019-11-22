const initialState = {
	list: []
};

const taskReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'FETCH_TASK_FIRST': {
			return {
				...state,
				list: []
			};
		}

		case 'FETCH_TASK_SUCCESS': {
			const { data } = action.payload

			return {
				...state,
				list: data
			};
		}

		default:
			return state;
	}
};

export default taskReducer;
