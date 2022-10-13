import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { JobCard } from 'src/jobcards/schema/jobcards.schema';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
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
    description: 'Departamento donde vive el usuario',
    example: 'Comuna 13',
  })
  @Prop({ default: 'Sin definir' })
  department: string;

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

  @Prop([{ type: mongoose.Types.ObjectId, ref: 'Jobcards' }])
  jobcards: JobCard;
}

export const UserSchema = SchemaFactory.createForClass(User);
