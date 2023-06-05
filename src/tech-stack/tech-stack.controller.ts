import { Controller, Get } from '@nestjs/common';
import { TechStackService } from './tech-stack.service';

@Controller('tech-stack')
export class TechStackController {
  constructor(private readonly techStackService: TechStackService) {}

  @Get()
  findAll() {
    return this.techStackService.findAll();
  }
}
