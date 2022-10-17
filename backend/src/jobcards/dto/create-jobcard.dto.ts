import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateJobcardDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre de jobcard',
    example: 'Cortar el pasto',
  })
  titulo: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Categoria de jobcard',
    example: 'Limpieza',
  })
  categoria: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Precio de jobcard',
    example: 1500,
  })
  presupuesto: number;

  @ApiProperty({
    description: 'Fecha limite de jobcard',
    example: new Date('12-11-2022'),
  })
  @IsNotEmpty()
  @IsDateString()
  fechaLimite: Date;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Descripcion de jobcard',
    example: 'Cortar el pasto de mi patio 4x5 mts',
  })
  descripcion: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'UserId del usuario que crea la jobcard ',
    example: '634742c61f645b0765e7a2c3',
  })
  userId: string;
}
