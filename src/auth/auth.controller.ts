import { AuthService } from './auth.service';
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post('/signUp')
  signUp(@Body(ValidationPipe) authCredentailsDto: AuthCredentialsDto) {
    console.log(authCredentailsDto);
    return this.authService.signUp(authCredentailsDto);
  }

  @Post('/signIn')
  signIn(@Body(ValidationPipe) authCredentailsDto: AuthCredentialsDto) {
    return this.authService.signIn(authCredentailsDto);
  }
}
//[{"key":"password","value":"A6tytfiIo","description":"","type":"text","enabled":true}]