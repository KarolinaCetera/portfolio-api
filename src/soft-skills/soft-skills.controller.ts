import { Controller, Get } from '@nestjs/common';
import { SoftSkillsService } from './soft-skills.service';

@Controller('softSkills')
export class SoftSkillsController {
  constructor(private readonly softSkillsService: SoftSkillsService) {}

  @Get()
  findAll() {
    return this.softSkillsService.findAll();
  }
}
