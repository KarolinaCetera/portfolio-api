import { Module } from '@nestjs/common';
import { SoftSkillsService } from './soft-skills.service';
import { SoftSkillsController } from './soft-skills.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Other } from '../schemas/OtherSchema';
import { SoftSkills, SoftSkillsSchema } from '../schemas/SoftSkillsSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SoftSkills.name, schema: SoftSkillsSchema },
    ]),
  ],
  controllers: [SoftSkillsController],
  providers: [SoftSkillsService],
})
export class SoftSkillsModule {}
