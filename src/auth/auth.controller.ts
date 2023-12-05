import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Post('login')
  // @UseGuards(LocalAuthGuard)
  @ApiBody({type: CreateUserDto})
  async login(@Request() req) {
    return this.authService.login(req.body as UserEntity);
  }

  @Post('register')
  @ApiBody({type: CreateUserDto})
  async register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }
}
