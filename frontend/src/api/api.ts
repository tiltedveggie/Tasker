import { ITask } from '../interfaces/task';
import axios from 'axios';

export const createTaskRequest = async (task: ITask) => {
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
