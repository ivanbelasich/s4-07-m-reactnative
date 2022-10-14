import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginAuthDto {
  @ApiProperty({
    description: 'Email del usuario',
    example: 'ezequiel.astrada@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password del usuario',
    example: '1234',
  })
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(12)
  password: string;
}
