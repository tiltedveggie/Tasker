import React, { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';
import { CreateTask, ITask, UpdateTask } from '../interfaces/task.interface';
import {
	createTaskRequest,
	deleteTaskRequest,
	getTasksRequest,
	updateTaskRequest
} from '../api/api';

// --------------------------------------------------------

interface Props {
	children: ReactNode;
}

interface TaskContextValues {
	tasks: ITask[];
	createTask: (task: CreateTask) => Promise<void>;
	updateTask: (id: string, task: UpdateTask) => Promise<void>;
	deleteTask: (id: string) => Promise<void>;
}

// --------------------------------------------------------

export const TaskContext = createContext<TaskContextValues>({
	tasks: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	createTask: async () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateTask: async () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	deleteTask: async () => {}
});

// --------------------------------------------------------

const TaskProvider: React.FC<Props> = ({ children }) => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	const getTasks = async () => {
		const data = getTasksRequest();

		setTasks(await data);
	};

	const createTask = async (task: CreateTask) => {
		const newTask = await createTaskRequest(task);
		setTasks([...tasks, newTask]);
	};

	const updateTask = async (id: string, task: UpdateTask) => {
		const updatedTask = await updateTaskRequest(id, task);

		console.log(updatedTask);

		setTasks(
			tasks.map(task => (task._id === id ? { ...task, ...updatedTask } : task))
		);
	};

	const deleteTask = async (id: string) => {
		const deletedTask = await deleteTaskRequest(id);

		if (deletedTask?.status === 204) {
			setTasks(tasks.filter(task => task._id !== id));
		}
	};

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
