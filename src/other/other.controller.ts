import { Controller, Get } from '@nestjs/common';
import { OtherService } from './other.service';

@Controller('other')
export class OtherController {
  constructor(private readonly otherService: OtherService) {}

  @Get()
  findAll() {
    return this.otherService.findAll();
  }
}
