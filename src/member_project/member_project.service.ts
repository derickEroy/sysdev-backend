import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberProjectDto } from './dto/create-member_project.dto';
import { UpdateMemberProjectDto } from './dto/update-member_project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberProject } from './entities/member_project.entity';
import { Member } from 'src/members/entities/member.entity';
import { Project } from 'src/projects/entities/project.entity';

@Injectable()
export class MemberProjectService {
  constructor(
    @InjectRepository(MemberProject)
    private readonly memberProjectsRepository: Repository<MemberProject>,
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>
  ) {}

  async create(createMemberProjectDto: CreateMemberProjectDto) {
    const member = await this.memberRepository.findOne({
      where: {
        id: createMemberProjectDto.member_id
      }
    });

    if (!member) {
      throw new NotFoundException('Member not found');
    }

    const project = await this.projectsRepository.findOne({
      where: {
        id: createMemberProjectDto.project_id
      }
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    const memberProject = new MemberProject();

    memberProject.member = member;
    memberProject.project = project;

    return await this.memberProjectsRepository.save(memberProject);
  }

  async findAll() {
    return await this.memberProjectsRepository.find({
      relations: ['member', 'project']
    });
  }

  async findOne(id: number) {
    const memberProject = await this.memberProjectsRepository.find({
      where: { id },
      relations: ['member', 'project']
    });

    if (!memberProject) {
      throw new NotFoundException();
    }

    return memberProject;
  }

  async update(id: number, updateMemberProjectDto: UpdateMemberProjectDto) {
    const memberProject = await this.findOne(id);

    Object.assign(memberProject, updateMemberProjectDto);

    return await this.memberProjectsRepository.save(memberProject);
  }

  async remove(id: number) {
    const memberProject = await this.findOne(id);

    return await this.memberProjectsRepository.remove(memberProject);
  }
}
