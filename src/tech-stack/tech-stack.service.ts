import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { TechStack } from '../schemas/TechStackSchema';

@Injectable()
export class TechStackService {
  constructor(
    @InjectModel(TechStack.name) private techStackModel: Model<TechStack>,
  ) {}

  findAll(): Promise<Array<HydratedDocument<TechStack>>> {
    return this.techStackModel.find().exec();
  }
}
