import { TaskStatus } from './../task-status.enum';
import { IsOptional, IsIn, IsNotEmpty, IsUppercase } from 'class-validator';
export class GetTasksFilterDto {

    @IsOptional()
    @IsIn([TaskStatus.OPEN,TaskStatus.IN_PROGRESS,TaskStatus.DONE])
    @IsUppercase()
    status: TaskStatus

    @IsOptional()
    @IsNotEmpty()
    search: string;
}