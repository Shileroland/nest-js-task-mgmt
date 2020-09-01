import { UserRepository } from './user.repository';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]),
    ],
    exports: [
        TypeOrmModule.forFeature([UserRepository]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})

export class AuthModule{

}