import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SoftSkillsDocument = HydratedDocument<SoftSkills>;

@Schema({ collection: 'softSkills' })
export class SoftSkills {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  icon: string;
}

export const SoftSkillsSchema = SchemaFactory.createForClass(SoftSkills);
