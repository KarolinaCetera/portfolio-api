import { Module } from '@nestjs/common';
import { SoftSkillsService } from './soft-skills.service';
import { SoftSkillsController } from './soft-skills.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Other, OtherSchema } from '../schemas/OtherSchema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Other.name, schema: OtherSchema }]),
  ],
  controllers: [SoftSkillsController],
  providers: [SoftSkillsService],
})
export class SoftSkillsModule {}
