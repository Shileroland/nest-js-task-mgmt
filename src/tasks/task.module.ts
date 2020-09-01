import { TaskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { Module} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TaskRepository]),
    ],
    exports: [
        TypeOrmModule.forFeature([TaskRepository]),
    ],
    controllers:[TasksController],
    providers: [TasksService]
})
export class TaskModule {}
