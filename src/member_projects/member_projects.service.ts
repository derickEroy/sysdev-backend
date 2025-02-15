import { Injectable } from '@nestjs/common';
import { CreateMemberProjectDto } from './dto/create-member_project.dto';
import { UpdateMemberProjectDto } from './dto/update-member_project.dto';

@Injectable()
export class MemberProjectsService {
  create(createMemberProjectDto: CreateMemberProjectDto) {
    return 'This action adds a new memberProject';
  }

  findAll() {
    return `This action returns all memberProjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberProject`;
  }

  update(id: number, updateMemberProjectDto: UpdateMemberProjectDto) {
    return `This action updates a #${id} memberProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberProject`;
  }
}
