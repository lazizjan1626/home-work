import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MenagerService } from '../menager/menager.service';
import { Menager } from '../menager/schemas/menager.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly menegerService: MenagerService,
    private readonly jwtService: JwtService,
  ) {}

  async validateMeneger(email: string, password: string): Promise<any> {
    const user = await this.menegerService.findUserByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(name: string, email: string, password: string): Promise<Menager> {
    return this.menegerService.create(name, email, password);
  }
}
