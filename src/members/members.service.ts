import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const member = this.memberRepository.create(createMemberDto);
    
    return await this.memberRepository.save(member);
  }

  async findAll() {
    return await this.memberRepository.find();
  }

  async findOne(id: number) {
    const member = await this.memberRepository.findOne({ where: { id } });

    if (!member) throw new NotFoundException();

    return member;
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    const member = await this.findOne(id);

    Object.assign(member, updateMemberDto);
    
    return await this.memberRepository.save(member);
  }

  async remove(id: number) {
    const member = await this.findOne(id);
  
    return await this.memberRepository.remove(member);
  }
}
