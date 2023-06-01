import React from 'react';
import { ITask } from '../../../interfaces/task.interface';

const Task = (props: ITask) => {
	return (
		<div>
			<div>
				<p>{props.title}</p>
				<p>{props.description}</p>
			</div>
			<div>
				<button>Update</button>
				<button>Delete</button>
			</div>
		</div>
	);
};

export default Task;
