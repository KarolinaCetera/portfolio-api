import { Module } from '@nestjs/common';
import { TechStackService } from './tech-stack.service';
import { TechStackController } from './tech-stack.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TechStack, TechStackSchema } from '../schemas/TechStackSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TechStack.name, schema: TechStackSchema },
    ]),
  ],
  controllers: [TechStackController],
  providers: [TechStackService],
})
export class TechStackModule {}
