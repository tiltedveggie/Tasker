export interface ITask {
	_id: string;
	title: string;
	description?: string;
	done?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export type CreateTask = Omit<ITask, '_id' | 'createdAt' | 'updatedAt'>;

export type UpdateTask = Partial<CreateTask>;
