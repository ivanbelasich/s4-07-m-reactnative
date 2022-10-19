import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  userId: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
