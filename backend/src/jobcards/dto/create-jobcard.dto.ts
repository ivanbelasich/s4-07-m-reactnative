import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateJobcardDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre de jobcard',
    example: 'Cortar el pasto',
  })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Precio de jobcard',
    example: 1500,
  })
  price: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Descripcion de jobcard',
    example: 'Cortar el pasto de mi patio 4x5 mts',
  })
  description: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'UserId del usuario que crea la jobcard ',
    example: '634742c61f645b0765e7a2c3',
  })
  userId: string;
}
