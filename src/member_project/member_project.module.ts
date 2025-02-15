import { Module } from '@nestjs/common';
import { MemberProjectService } from './member_project.service';
import { MemberProjectController } from './member_project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberProject } from './entities/member_project.entity';
import { Member } from 'src/members/entities/member.entity';
import { Project } from 'src/projects/entities/project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MemberProject, Member, Project])
  ],
  controllers: [MemberProjectController],
  providers: [MemberProjectService],
})
export class MemberProjectModule {}
