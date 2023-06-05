import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { SoftSkills } from '../schemas/SoftSkillsSchema';

@Injectable()
export class SoftSkillsService {
  constructor(
    @InjectModel(SoftSkills.name)
    private softSkillsModel: Model<SoftSkills>,
  ) {}

  findAll(): Promise<Array<HydratedDocument<SoftSkills>>> {
    return this.softSkillsModel.find().exec();
  }
}
