import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre de la notificacion',
    example: 'Tu postulacion fue aceptada',
  })
  nombre: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Descripcion de la notificacion',
    example: 'Tu postulacion fue aceptada',
  })
  descripcion: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'userId del usuario que recibe la notificacion',
    example: '634742c61f645b0765e7a2c3',
  })
  userId: string;
}
