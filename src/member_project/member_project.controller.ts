import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberProjectService } from './member_project.service';
import { CreateMemberProjectDto } from './dto/create-member_project.dto';
import { UpdateMemberProjectDto } from './dto/update-member_project.dto';
import { ResponseDto } from 'src/common/dtos';

@Controller('/api/member_project')
export class MemberProjectController {
  constructor(private readonly MemberProjectService: MemberProjectService) {}

  @Post()
  async create(@Body() createMemberProjectDto: CreateMemberProjectDto) {
    return new ResponseDto(
      'Member project successfully created',
      await this.MemberProjectService.create(createMemberProjectDto)
    );
  }

  @Get()
  async findAll() {
    return new ResponseDto(
      'Member projects retrieved successfully',
      await this.MemberProjectService.findAll()
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ResponseDto(
      'Member project successfully retrieved',
      await this.MemberProjectService.findOne(+id)
    );
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMemberProjectDto: UpdateMemberProjectDto) {
    return new ResponseDto(
      'Member project successfully updated',
      await this.MemberProjectService.update(+id, updateMemberProjectDto)
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ResponseDto(
      'Member project successfully deleted',
      await this.MemberProjectService.remove(+id)
    );
  }
}
