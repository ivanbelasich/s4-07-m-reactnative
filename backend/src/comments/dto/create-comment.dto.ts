import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'jobcardId de la jobcard en donde se realiza el comentario',
    example: '63458af63e35d534cfb57ad1',
  })
  jobcardId: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Contenido del comentario',
    example: 'Muy buen trabajo',
  })
  description: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'UserId del usuario que realiza el comentario',
    example: '634742c61f645b0765e7a2c3',
  })
  userId: string;
}
