
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Delete, Patch, Query, UseGuards, Logger } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  private logger = new Logger('TaskController');
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto, @GetUser() user:User): Promise<Task[]>{ 
    this.logger.verbose(`user "${user.username}" retrieving all tasks. Filtters :${JSON.stringify(filterDto.status.toLowerCase())}`)
         return this.tasksService.getTasks(filterDto, user);  
  }


  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<Task>{
    return this.tasksService.getTasksById(id, user);
  }

 
  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto, @GetUser() user:User): Promise<Task>{
    this.logger.verbose(`user "${user.username}" Creating a new task.${JSON.stringify(createTaskDto)}`)
    return this.tasksService.createTask(createTaskDto, user);
  }


  @Delete('/:id')
  deleteATask(@Param('id', ParseIntPipe) id: number, @GetUser() user : User):void {
    this.tasksService.deleteATask(id, user);
  }

  @Patch('/:id/status')
  updateATask(@Param('id', ParseIntPipe) id: number, @Body('status', TaskStatusValidationPipe) status: TaskStatus, @GetUser() user: User): Promise<Task>{
      return this.tasksService.updateTaskStatus(id, status, user);

  }
}
