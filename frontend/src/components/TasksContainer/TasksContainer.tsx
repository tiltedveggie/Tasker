import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Task from './Task/Task';

const TasksContainer = () => {
	const { tasks } = useFetch(process.env.REACT_APP_API_URL + '/tasks' || '');

	console.log(tasks);

	return (
		<div>
			{tasks?.map(task => (
				<Task key={task._id} {...task} />
			))}
		</div>
	);
};

export default TasksContainer;
