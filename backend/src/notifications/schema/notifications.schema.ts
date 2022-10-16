import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  @Prop()
  name: string;

  @Prop()
  userId: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
