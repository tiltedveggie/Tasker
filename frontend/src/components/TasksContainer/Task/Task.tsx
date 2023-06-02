import React from 'react';
import { ITask } from '../../../interfaces/task.interface';
import { useTask } from '../../../hooks/useTasks';

const Task = (props: ITask) => {
	const { deleteTask } = useTask();

	return (
		<div>
			<div>
				<p>{props.title}</p>
				<p>{props.description}</p>
			</div>
			<div>
				<button>Update</button>
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
		</div>
	);
};

export default Task;
