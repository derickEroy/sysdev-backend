import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { pgOptions } from './configs/pg.config';
import { MembersModule } from './members/members.module';
import { ProjectsModule } from './projects/projects.module';
import { MemberProjectModule } from './member_project/member_project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(pgOptions),
    MembersModule,
    ProjectsModule,
    MemberProjectModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
