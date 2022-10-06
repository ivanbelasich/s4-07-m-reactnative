import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateJobcardDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;

  @IsNotEmpty()
  descripcion: string;
}
