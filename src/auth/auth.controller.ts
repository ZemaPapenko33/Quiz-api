// src/auth/auth.controller.ts
import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { authRoutes } from './routes/authRoutes.routes';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller(authRoutes.ROOT)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get(authRoutes.GOOGLE)
  @UseGuards(GoogleOauthGuard)
  googleAuth() {
    return { message: 'Redirecting to Google' };
  }

  @Get(authRoutes.CALLBACK)
  @UseGuards(GoogleOauthGuard)
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const user = req.user;
    const token = this.authService.generateAccessToken(user);

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600000,
    });

    res.redirect('http://localhost:3000/quizzes');
  }
}
