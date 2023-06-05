import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperienceModule } from './experience/experience.module';
import { OtherModule } from './other/other.module';
import { SoftSkillsModule } from './soft-skills/soft-skills.module';
import { TechStackModule } from './tech-stack/tech-stack.module';
import { MongooseModule } from '@nestjs/mongoose';

const url = `mongodb+srv://admin:admin@cluster0.xoklb.mongodb.net/portfolio?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(url),
    ExperienceModule,
    OtherModule,
    SoftSkillsModule,
    TechStackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
