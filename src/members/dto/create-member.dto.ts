import { IsIn, IsString } from "class-validator";

export class CreateMemberDto {
    @IsString()
    name: string;

    @IsIn(['backend', 'frontend', 'UI/UX'])
    role: string;
}