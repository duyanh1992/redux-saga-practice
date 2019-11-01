import axios from 'axios';

class AxiosService {
	constructor() {
		const instance = axios.create();

		instance.interceptors.request.use(this.onSuccess, this.onError);

		this.instance = instance;
	}

	onSuccess(response) {
		return response;
	}

	onError(error) {
		return Promise.reject(error);
	}

	get(url) {
		return this.instance.get(url);
	}
}

export default new AxiosService();