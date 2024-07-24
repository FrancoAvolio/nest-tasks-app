import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TaskController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get('/tasks')
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post('/tasks')
  createTask() {
    return 'Tarea creada';
  }

  @Put('/tasks')
  updateTask() {
    return 'Tarea actualizada';
  }

  @Delete('/tasks')
  deleteTask() {
    return 'Tarea eliminada';
  }

  @Patch('/tasks')
  updateTaskStatus() {
    return 'Tarea actualizada';
  }
}
