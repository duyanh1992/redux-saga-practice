import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../constants/index';

const endPoint = 'task';

export const getList = () => {
	return axiosService.get(`${API_ENDPOINT}/${endPoint}`);
};