import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Other } from '../schemas/OtherSchema';
import { HydratedDocument, Model } from 'mongoose';

@Injectable()
export class TechStackService {
  constructor(@InjectModel(Other.name) private techStackModel: Model<Other>) {}

  findAll(): Promise<Array<HydratedDocument<Other>>> {
    return this.techStackModel.find().exec();
  }
}
