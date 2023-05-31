import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDTO } from 'src/dto/createTask.dto';
import { UpdateTaskDTO } from 'src/dto/updateTask.dto';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TasksService {
	constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

	async findAllTasks() {
		await this.taskModel.find();
	}

	async findOneTask(id) {
		await this.taskModel.findOne(id);
	}

	async createTask(taskData: CreateTaskDTO) {
		const newTask = await this.taskModel.create(taskData);

		return await newTask.save();
	}

	async updateTask(id: string, taskData: UpdateTaskDTO) {
		const newTask = await this.taskModel.findByIdAndUpdate(id, taskData);

		return await newTask.save();
	}

	async deleteTask(id) {
		const newTask = await this.taskModel.findByIdAndDelete(id);

		return await newTask.save();
	}
}
