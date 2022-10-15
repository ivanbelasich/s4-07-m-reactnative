import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CommentsDocument = Comment & Document;

@Schema({ timestamps: true })
export class Comment {
  @Prop()
  jobcardId: string;

  @Prop()
  description: string;

  @Prop()
  userId: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comment);
