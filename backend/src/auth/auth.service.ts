import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schema/user.schema';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { compare, hash } from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async login(user: any): Promise<any> {
    return {
      access_token: this.jwtService.sign({
        user: user,
        sub: 1,
      }),
    };
  }

  async login1(userObject: LoginAuthDto) {
    const { email, password } = userObject;

    const findUser = await this.userModel.findOne({ email });
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const payload = {
      id: findUser._id,
      name: findUser.name,
      email: findUser.email,
    };
    const token = this.jwtService.sign(payload);

    const data = {
      token,
      user: findUser,
    };
    return data;
  }

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 19);
    userObject = { ...userObject, password: plainToHash };
    return this.userModel.create(userObject);
  }
}
