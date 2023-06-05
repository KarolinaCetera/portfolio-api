import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Other } from '../schemas/OtherSchema';
import { HydratedDocument, Model } from 'mongoose';

@Injectable()
export class SoftSkillsService {
  constructor(@InjectModel(Other.name) private softSkillsModel: Model<Other>) {}

  findAll(): Promise<Array<HydratedDocument<Other>>> {
    return this.softSkillsModel.find().exec();
  }
}
