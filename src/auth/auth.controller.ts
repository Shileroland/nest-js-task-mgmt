/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AuthService } from './auth.service';
import {Controller, Post, Body, ValidationPipe} from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post('/signUp')
  signUp(@Body(ValidationPipe) authCredentailsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentailsDto);
  }

  @Post('/signIn')
  signIn(
    @Body(ValidationPipe) authCredentailsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentailsDto);
  }

  // @Post('/test')
  // @UseGuards(AuthGuard())
  // test(@GetUser() user: User) {
  //   console.log(user);
  // }
}
