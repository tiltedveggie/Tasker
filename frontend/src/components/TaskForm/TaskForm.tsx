import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CreateTask } from '../../interfaces/task.interface';
import { useTask } from '../../hooks/useTasks';

const TaskForm = () => {
	const [task, setTask] = useState<CreateTask>({
		title: '',
		description: '',
		done: false
	});

	const { createTask } = useTask();

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
		createTask(task);
	};

	return (
		<form onSubmit={handleSubmit}>
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
