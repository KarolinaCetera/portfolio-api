import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TechStackDocument = HydratedDocument<TechStack>;

@Schema({ collection: 'techStack' })
export class TechStack {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  icon: string;
}

export const TechStackSchema = SchemaFactory.createForClass(TechStack);
