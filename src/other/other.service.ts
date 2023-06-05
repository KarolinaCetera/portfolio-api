import { Injectable } from '@nestjs/common';
import { HydratedDocument, Model } from 'mongoose';
import { Other } from '../schemas/OtherSchema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OtherService {
  constructor(@InjectModel(Other.name) private otherModel: Model<Other>) {}

  findAll(): Promise<Array<HydratedDocument<Other>>> {
    return this.otherModel.find().exec();
  }
}
