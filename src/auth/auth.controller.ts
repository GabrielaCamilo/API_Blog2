
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthGuard, Public } from './auth.guard';
  import { AuthService } from './auth.service';
import { sign } from 'crypto';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto:Record<string, any>) {
      console.log(signInDto)
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }
  