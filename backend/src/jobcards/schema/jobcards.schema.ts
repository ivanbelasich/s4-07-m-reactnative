import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type JobCardsDocument = JobCard & Document;

@Schema({ timestamps: true })
export class JobCard {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  userId: string;
}

export const JobCardSchema = SchemaFactory.createForClass(JobCard);
