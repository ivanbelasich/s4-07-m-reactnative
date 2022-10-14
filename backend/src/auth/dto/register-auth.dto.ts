import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsDateString } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Ezequiel Astrada',
  })
  @IsNotEmpty()
  nombreCompleto: string;

  @ApiProperty({
    description: 'Genero del usuario',
    example: 'Masculino',
  })
  @IsNotEmpty()
  genero: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del usuario',
    example: new Date('04-12-1990'),
  })
  @IsNotEmpty()
  @IsDateString()
  fechaDeNacimiento: Date;

  @ApiProperty({
    description: 'Pais donde vive el usuario',
    example: 'Argentina',
  })
  @IsNotEmpty()
  pais: string;

  @ApiProperty({
    description: 'Provincia donde vive el usuario',
    example: 'Buenos Aires',
  })
  @IsNotEmpty()
  provincia: string;

  @ApiProperty({
    description: 'Ciudad donde vive el usuario',
    example: 'Quilmes',
  })
  @IsNotEmpty()
  ciudad: string;
}
