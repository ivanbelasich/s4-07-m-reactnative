import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobCardsDocument = JobCards & Document;

@Schema()
export class JobCards {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const JobCardsSchema = SchemaFactory.createForClass(JobCards);
