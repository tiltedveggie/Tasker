import { CreateTask } from '../interfaces/task.interface';
import axios from 'axios';

export const createTaskRequest = async (task: CreateTask) => {
	try {
		const { data } = await axios.post(
			process.env.REACT_APP_API_URL + '/tasks',
			task
		);

		console.log(data);
	} catch (err) {
		console.log(err);
	}
};
