import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberProjectsService } from './member_projects.service';
import { CreateMemberProjectDto } from './dto/create-member_project.dto';
import { UpdateMemberProjectDto } from './dto/update-member_project.dto';

@Controller('member-projects')
export class MemberProjectsController {
  constructor(private readonly memberProjectsService: MemberProjectsService) {}

  @Post()
  create(@Body() createMemberProjectDto: CreateMemberProjectDto) {
    return this.memberProjectsService.create(createMemberProjectDto);
  }

  @Get()
  findAll() {
    return this.memberProjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberProjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberProjectDto: UpdateMemberProjectDto) {
    return this.memberProjectsService.update(+id, updateMemberProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberProjectsService.remove(+id);
  }
}
