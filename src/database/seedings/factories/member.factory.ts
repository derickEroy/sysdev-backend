import { Chance } from "chance";
import { Member } from "../../../members/entities/member.entity";
import { setSeederFactory } from "typeorm-extension";

// NOTE: Used Chance library due to built-in faker error `TypeError: e.every is not a function`
export const MemberFactory = setSeederFactory(Member, () => {
    const chance = new Chance();

    const member = new Member();

    member.name = chance.name();
    member.role = 'sample_role';

    return member;
});