import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type JobCardsDocument = JobCard & Document;

@Schema({ timestamps: true })
export class JobCard {
  @Prop()
  titulo: string;

  @Prop()
  categoria: string;

  @Prop()
  fechaLimite: Date;

  @Prop()
  presupuesto: number;

  @Prop()
  descripcion: string;

  @Prop()
  userId: string;
}

export const JobCardSchema = SchemaFactory.createForClass(JobCard);
