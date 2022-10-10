import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Ezequiel Astrada',
  })
  @Prop({ required: true })
  nombreCompleto: string;

  @ApiProperty({
    description: 'Email del usuario',
    example: 'ezequiel.astrada@gmail.com',
  })
  @Prop({ unique: true })
  email: string;

  @ApiProperty({
    description: 'Genero del usuario',
    example: 'Masculino',
  })
  @Prop({ default: 'Sin definir' })
  genero: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del usuario',
    example: new Date('04-12-1990'),
  })
  @Prop({ default: Date.now() })
  fechaDeNacimiento: Date;

  @ApiProperty({
    description: 'Pais donde vive el usuario',
    example: 'Argentina',
  })
  @Prop({ default: 'Sin definir' })
  pais: string;

  @ApiProperty({
    description: 'Provinca donde vive el usuario',
    example: 'Buenos Aires',
  })
  @Prop({ default: 'Sin definir' })
  provincia: string;

  @ApiProperty({
    description: 'Ciudad donde vive el usuario',
    example: 'Quilmes',
  })
  @Prop({ default: 'Sin definir' })
  ciudad: string;

  @ApiProperty({
    description: 'Password hashed del usuario',
  })
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
