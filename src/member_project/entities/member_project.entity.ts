import { Member } from "src/members/entities/member.entity";
import { Project } from "src/projects/entities/project.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'member_project' })
export class MemberProject {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Member, (member) => member.id)
    @JoinColumn({ name: 'member_id' })
    member: Member;

    @ManyToOne(() => Project, (project) => project.id)
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @CreateDateColumn() 
    assigned_at: Date;
}