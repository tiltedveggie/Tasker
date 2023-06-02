import React from 'react';
import { ITask } from '../../../interfaces/task.interface';
import { useTask } from '../../../hooks/useTasks';

const Task = (props: ITask) => {
	const { updateTask, deleteTask } = useTask();

	return (
		<div>
			<div>
				<p>{props.title}</p>
				<p>{props.description}</p>
			</div>
			<div>
				<button onClick={() => updateTask(props._id, { done: !props.done })}>
					Update
				</button>
				<button
					onClick={() => {
						if (!window.confirm('Are you sure you want to delete this task?')) {
							return;
						}

						deleteTask(props._id);
					}}>
					Delete
				</button>
			</div>
			<div>{props.done ? 'Undone' : 'Done'}</div>
		</div>
	);
};

export default Task;
