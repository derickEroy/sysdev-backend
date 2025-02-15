import { Member } from "src/members/entities/member.entity";
import { Project } from "src/projects/entities/project.entity";
import { CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'member_projects' })
export class MemberProject {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Member, member => member.id)
    member_id: number[];

    @OneToMany(() => Project, project => project.id)
    projects_id: number[];

    @CreateDateColumn()
    assigned_at: Date;
}