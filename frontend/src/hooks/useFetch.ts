import { useState, useEffect } from 'react';
import { ITask } from '../interfaces/task.interface';
import axios from 'axios';

export function useFetch(url: string) {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		axios
			.get(url)

			.then(({ data }) => {
				setTasks(data);
			})

			.catch(error => setError(error))

			.finally(() => setLoading(false));
	}, []);

	return { tasks, loading, error };
}
