import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
    @InjectRepository(UserRepository) 
    private userRepository: UserRepository){

    }

    async signUp(authCredentialsDto:AuthCredentialsDto): Promise<void>{
        return await this.userRepository.signUp(authCredentialsDto)
    }

    async signIn(authCredentialsDto: AuthCredentialsDto){
        const result = await this.userRepository.validateUserPassword(authCredentialsDto);
        console.log(result);

    }
}


