import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
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
		try {
			const singleTask = await this.tasksService.findOneTask(id);

			return singleTask;
		} catch (err) {
			throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);
		}
	}

	@Post()
	async createTask(@Body() taskData: CreateTaskDTO) {
		try {
			const newTask = await this.tasksService.createTask(taskData);

			return newTask;
		} catch (err) {
			throw new HttpException('Task already exists!', HttpStatus.CONFLICT);
		}
	}

	@Patch(':id')
	async updateTask(@Param('id') id: string, @Body() taskData: UpdateTaskDTO) {
		try {
			const updatedTask = await this.tasksService.updateTask(id, taskData);

			return updatedTask;
		} catch (err) {
			throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);
		}
	}

	@Delete(':id')
	@HttpCode(204)
	async deleteTask(@Param('id') id: string) {
		try {
			const deletedTask = await this.tasksService.deleteTask(id);

			return deletedTask;
		} catch (err) {
			throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);
		}
	}
}
