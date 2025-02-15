import { IsInt } from "class-validator";

export class CreateMemberProjectDto {
    @IsInt()
    member_id: number;

    @IsInt()
    project_id: number;
}