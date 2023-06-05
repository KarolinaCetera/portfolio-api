import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from '../schemas/ExperienceSchema';
import { HydratedDocument, Model } from 'mongoose';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name) private experienceModel: Model<Experience>,
  ) {}

  async findAll(): Promise<Array<HydratedDocument<Experience>>> {
    return this.experienceModel.find().exec();
  }
}
