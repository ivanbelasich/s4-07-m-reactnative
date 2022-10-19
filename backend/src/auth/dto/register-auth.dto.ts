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
    description: 'Departamento donde vive el usuario',
    example: 'Comuna 3',
  })
  @IsNotEmpty()
  department: string;

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

  @ApiProperty({
    description: 'URL de la foto de perfil del usuario',
    example:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrw6TFJfxQTpixJo4fe2VDEBKrNfyPUhkTdw&usqp=CAU',
  })
  photoUrl: string;
}
