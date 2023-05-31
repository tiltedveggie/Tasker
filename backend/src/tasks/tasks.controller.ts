import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	async findAllTasks() {
		return 'Find All Tasks';
	}

	@Get(':id')
	async findOneTask() {
		return 'Find one Task';
	}

	@Post()
	async createTask() {
		return 'Create a Task';
	}

	@Patch(':id')
	async updateTask() {
		return 'Update a Task';
	}

	@Delete(':id')
	async deleteTask() {
		return 'Delete a Task';
	}
}
