import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

export const typeOrmConfig: TypeOrmModuleOptions = {

    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "springstudent",
    password: "springstudent",
    database: "taskmanagement",
    entities:  ["dist/**/*.entity{.ts,.js}"],
    synchronize:true
}