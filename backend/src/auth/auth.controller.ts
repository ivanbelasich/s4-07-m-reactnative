import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/users/schema/user.schema';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register new user' })
  @ApiCreatedResponse({
    description: 'Created user object as response',
    schema: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
          example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDNhNjU0OTY4OTlhYWQwMmU5ZDk3MyIsIm5vbWJyZUNvbXBsZXRvIjoiRXplcXVpZWwgQXN0cmFkYSIsImVtYWlsIjoiZXplcXVpZWwuYXN0cmFkYUBnbWFpbC5jb20iLCJpYXQiOjE2NjUzODIxMzEsImV4cCI6MTY2NTM4OTMzMX0.zVgBIIaWYJic2lDo4GV56j7WdxrC14_TYxXbs-l2sWI',
        },
        user: {
          type: 'object',
          example: User,
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    schema: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
          example: 404,
        },
        message: {
          type: 'string',
          example: 'USER_ALREADY_EXISTS',
        },
      },
    },
  })
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject);
  }

  @Post('login')
  loginUser(@Body() userObject: LoginAuthDto) {
    return this.authService.login1(userObject);
  }
}
