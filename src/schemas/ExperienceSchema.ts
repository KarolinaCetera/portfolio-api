import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema({ collection: 'experience' })
export class Experience {
  @Prop()
  companyName: string;

  @Prop()
  period: string;

  @Prop()
  stack: string;

  @Prop([String])
  points: string[];
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
