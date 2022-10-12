import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schema/user.schema';

export type JobCardsDocument = JobCard & Document;

@Schema({ timestamps: true })
export class JobCard {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const JobCardSchema = SchemaFactory.createForClass(JobCard);
