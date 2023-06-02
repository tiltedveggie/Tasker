import React, { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';
import { CreateTask, ITask } from '../interfaces/task.interface';
import { createTaskRequest, getTasksRequest } from '../api/api';

// --------------------------------------------------------

interface Props {
	children: ReactNode;
}

interface TaskContextValues {
	tasks: ITask[];
	createTask: (task: CreateTask) => void;
}

// --------------------------------------------------------

export const TaskContext = createContext<TaskContextValues>({
	tasks: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	createTask: () => {}
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

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<TaskContext.Provider value={{ tasks, createTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
