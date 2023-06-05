import { Module } from '@nestjs/common';
import { TechStackService } from './tech-stack.service';
import { TechStackController } from './tech-stack.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Other, OtherSchema } from '../schemas/OtherSchema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Other.name, schema: OtherSchema }]),
  ],
  controllers: [TechStackController],
  providers: [TechStackService],
})
export class TechStackModule {}
