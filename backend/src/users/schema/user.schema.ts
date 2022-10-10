import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  nombreCompleto: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ default: 'Sin definir' })
  genero: string;

  @Prop({ default: Date.now() })
  fechaDeNacimiento: Date;

  @Prop({ default: 'Sin definir' })
  pais: string;

  @Prop({ default: 'Sin definir' })
  provincia: string;

  @Prop({ default: 'Sin definir' })
  ciudad: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
