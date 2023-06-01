import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CreateTask } from '../../interfaces/task.interface';
import { createTaskRequest } from '../../api/api';

const TaskForm = () => {
	const [task, setTask] = useState<CreateTask>({
		title: '',
		description: '',
		done: false
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	const handleCheckboxChange = () => {
		setTask({ ...task, done: !task.done });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		createTaskRequest(task);
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<div>
				<p>Title</p>
				<input name='title' type='text' onChange={e => handleChange(e)} />
			</div>

			<div>
				<p>Description</p>
				<textarea
					name='description'
					id=''
					onChange={e => handleChange(e)}></textarea>
			</div>

			<div>
				<label htmlFor=''>Done</label>
				<input
					name='done'
					type='checkbox'
					onChange={() => handleCheckboxChange()}
				/>
			</div>

			<button>Add Task</button>
		</form>
	);
};

export default TaskForm;
