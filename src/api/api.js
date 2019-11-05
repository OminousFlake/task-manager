import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/v2/'
});

const developer = `?developer=Alex?`;

export const tasksAPI = {
	fetchTasks(sortField, sortDirection = 'asc', page = 1) {
		if (sortField) {
			return instance.get(`${developer}&sort_field=${sortField}&sort_direction=${sortDirection}&page=${page}`)
				.then(response => {
					return response
				})
		} else {
			return instance.get(`${developer}&sort_direction=${sortDirection}&page=${page}`)
				.then(response => response);
		}
	},

	createTask(data) {
		let form = new FormData();
		form.append("username", data.username);
        form.append("email", data.email);
        form.append("text", data.text);
		return instance.post(`create${developer}`, form)			
			.then(res => {
				return res.data;
			})
	},

	logIn(data) {
		let form = new FormData();
		form.append("username", data.username);
        form.append("password", data.password);
		return instance.post(`login?${developer}`, form)			
			.then(res => {
				return res.data;
			})
	},

	editTask(token, id, status, text) {
		let form = new FormData();
		form.append("token", token);
		text && form.append("text", text);
		form.append("status", status);
		return instance.post(`/edit/${id}${developer}`, form);	
	}
}
