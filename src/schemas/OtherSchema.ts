import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OtherDocument = HydratedDocument<Other>;

@Schema({ collection: 'other' })
export class Other {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  icon: string;
}

export const OtherSchema = SchemaFactory.createForClass(Other);
