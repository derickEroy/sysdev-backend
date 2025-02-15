import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ResponseDto } from '../common/dtos';

@Controller('/api/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto) {
    return new ResponseDto(
      'Member added successfully',
      await this.membersService.create(createMemberDto)
    );
  }

  @Get()
  async findAll() {
    return new ResponseDto(
      'Members retrieved successfully',
      await this.membersService.findAll()
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ResponseDto(
      'Member retrieved successfully',
      await this.membersService.findOne(+id)
    );
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return new ResponseDto(
      'Member updated successfully',
      await this.membersService.update(+id, updateMemberDto)
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ResponseDto(
      'Member deleted successfully',
      await this.membersService.remove(+id)
    );
  }
}
