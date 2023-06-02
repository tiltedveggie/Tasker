import { CreateTask } from '../interfaces/task.interface';
import axios from 'axios';

export const getTasksRequest = async () => {
	try {
		const { data } = await axios.get(process.env.REACT_APP_API_URL + '/tasks');

		return data;
	} catch (err) {
		console.log(err);
	}
};

export const createTaskRequest = async (task: CreateTask) => {
	try {
		const { data } = await axios.post(
			process.env.REACT_APP_API_URL + '/tasks',
			task
		);

		return data;
	} catch (err) {
		console.log(err);
	}
};
