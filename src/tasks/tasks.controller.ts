

import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto){ 
         return this.tasksService.getTasks(filterDto);  
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task>{
    return this.tasksService.getTasksById(id);
  }

  // // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task>{
    return this.tasksService.createTask(createTaskDto);
  }

  // // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Delete('/:id')
  deleteATask(@Param('id', ParseIntPipe) id: number):void {
    this.tasksService.deleteATask(id);
  }

  @Patch('/:id/status')
  updateATask(@Param('id', ParseIntPipe) id: number, @Body('status', TaskStatusValidationPipe) status: TaskStatus): Promise<Task>{
      return this.tasksService.updateTaskStatus(id, status);

  }
}
