import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>{
    filterDto.status.toUpperCase()
    filterDto.status.toUpperCase()
    return this.taskRepository.getTasks(filterDto, user);
  }

  async getTasksById(id: number, user:User): Promise<Task> {
    const found = await this.taskRepository.findOne({where: {id, userId: user.id} });

    if (!found) {
      console.log(`Task with this ${found} not found`)
      throw new NotFoundException(`Task with ${id} not found`);
     
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  async deleteATask(id: number, user: User): Promise<void> {
    const result = await this.taskRepository.delete({id, userId: user.id});
    console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
  }

  async updateTaskStatus(id: number, status: TaskStatus, @GetUser() user: User): Promise<Task> {
    const task = await this.getTasksById(id, user);
    task.status = status;
    await task.save();
    return task;
  }
}
