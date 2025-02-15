import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { pgOptions } from "./pg.config";
import { Member } from "../members/entities/member.entity";
import { MemberFactory } from "../database/seedings/factories/member.factory";
import { MemberSeeder } from "../database/seedings/seeders/member.seeder";

export const seederOptions: DataSourceOptions & SeederOptions = {
    ...pgOptions,
    entities: [Member],
    factories: [MemberFactory],
    seeds: [MemberSeeder]
}

const seederDataSource = new DataSource(seederOptions);

export default seederDataSource;