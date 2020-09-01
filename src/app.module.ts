import { AuthModule } from './auth/auth.module';
import { TasksService } from './tasks/tasks.service';
import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { TasksController } from './tasks/tasks.controller';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TaskModule,
    AuthModule, 
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [TasksController, AuthController],
  providers: [TasksService, AuthService],
})
export class AppModule {}
