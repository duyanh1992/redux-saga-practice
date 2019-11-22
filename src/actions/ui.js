import * as actionTypes from './../constants/ui';

export const showGlobalLoading = () => ({
	type: actionTypes.GLOBAL_SHOW_LOADING
});

export const hideGlobalLoading = () => ({
	type: actionTypes.GLOBAL_HIDE_LOADING
});
