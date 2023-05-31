import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from '../dto/createTask.dto';
import { UpdateTaskDTO } from '../dto/updateTask.dto';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	async findAllTasks() {
		const tasks = await this.tasksService.findAllTasks();

		return tasks;
	}

	@Get(':id')
	async findOneTask(@Param('id') id: string) {
		const singleTask = await this.tasksService.findOneTask(id);

		return singleTask;
	}

	@Post()
	async createTask(@Body() taskData: CreateTaskDTO) {
		const newTask = await this.tasksService.createTask(taskData);

		return newTask;
	}

	@Patch(':id')
	async updateTask(@Param('id') id: string, @Body() taskData: UpdateTaskDTO) {
		const updatedTask = await this.tasksService.updateTask(id, taskData);

		return updatedTask;
	}

	@Delete(':id')
	async deleteTask(@Param('id') id: string) {
		const deletedTask = await this.tasksService.deleteTask(id);

		return deletedTask;
	}
}
