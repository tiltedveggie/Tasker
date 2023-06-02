import React, { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';
import { CreateTask, ITask } from '../interfaces/task.interface';
import {
	createTaskRequest,
	deleteTaskRequest,
	getTasksRequest
} from '../api/api';

// --------------------------------------------------------

interface Props {
	children: ReactNode;
}

interface TaskContextValues {
	tasks: ITask[];
	createTask: (task: CreateTask) => Promise<void>;
	deleteTask: (id: string) => Promise<void>;
}

// --------------------------------------------------------

export const TaskContext = createContext<TaskContextValues>({
	tasks: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	createTask: async () => {},
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
		<TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
