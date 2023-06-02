import React from 'react';
import Task from './Task/Task';
import { useTask } from '../../hooks/useTasks';

const TasksContainer = () => {
	const { tasks } = useTask();

	return (
		<div>
			{tasks?.map(task => (
				<Task key={task._id} {...task} />
			))}
		</div>
	);
};

export default TasksContainer;
