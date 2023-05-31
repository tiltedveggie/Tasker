import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDTO } from '../dto/createTask.dto';
import { UpdateTaskDTO } from '../dto/updateTask.dto';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TasksService {
	constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

	async findAllTasks() {
		const tasks = await this.taskModel.find();

		return tasks;
	}

	async findOneTask(id: string) {
		const singleTask = await this.taskModel.findById(id);

		return singleTask;
	}

	async createTask(taskData: CreateTaskDTO) {
		const newTask = await this.taskModel.create(taskData);

		return await newTask.save();
	}

	async updateTask(id: string, taskData: UpdateTaskDTO) {
		const updatedTask = await this.taskModel.findByIdAndUpdate(id, taskData, {
			new: true
		});

		return updatedTask;
	}

	async deleteTask(id: string) {
		const deletedTask = await this.taskModel.findByIdAndDelete(id);

		return deletedTask;
	}
}
