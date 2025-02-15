import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { MemberProject } from 'src/member_project/entities/member_project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(MemberProject)
    private readonly memberProjectRepository: Repository<MemberProject>
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    
    return await this.projectRepository.save(project);
  }

  async findAll() {
    return await this.projectRepository.find();
  }

  async findOne(id: number) {
    const project = await this.projectRepository.findOne({ where: { id } });

    if (!project) throw new NotFoundException();

    return project;
  }

  async findProjectMembers(id: number) {
    return (await this.memberProjectRepository.find({
      where: { project: { id } },
      relations: ['member']
    })).map(e => e.member);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id);

    Object.assign(project, updateProjectDto);

    return await this.projectRepository.save(project);
  }

  async remove(id: number) {
    const project = await this.findOne(id);

    return await this.projectRepository.remove(project);
  }
}
