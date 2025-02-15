import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ResponseDto } from '../common/dtos';

@Controller('/api/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    return new ResponseDto(
      'Project successfully created',
      await this.projectsService.create(createProjectDto)
    );
  }

  @Get()
  async findAll() {
    return new ResponseDto(
      'Projects successfully retrieved',
      await this.projectsService.findAll()
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ResponseDto(
      'Project successfully retrieved',
      await this.projectsService.findOne(+id)
    );
  }

  @Get(':id/members')
  async findProjectMembers(@Param('id') id: string) {
    return new ResponseDto(
      'Project members successfully retrieved',
      await this.projectsService.findProjectMembers(+id)
    )
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return new ResponseDto(
      'Project successfully updated',
      await this.projectsService.update(+id, updateProjectDto)
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ResponseDto(
      'Project successfully deleted',
      await this.projectsService.remove(+id)
    );
  }
}
