import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateAccessToken(user: any): string {
    const payload = {
      sub: user?.providerId,
      email: user?.email,
      name: user?.name,
    };

    return this.jwtService.sign(payload);
  }
}
