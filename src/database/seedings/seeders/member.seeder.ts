import { Member } from "../../../members/entities/member.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export class MemberSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const repository = dataSource.getRepository(Member);

        console.log('Seeding one member by insertion...')
        await repository.insert([
            {
                name: 'John Doe',
                role: 'sample_role'
            } 
        ]);

        const userFactory = factoryManager.get(Member);
        
        console.log('Seeding one member using factory...');
        await userFactory.save();

        const amount = 5;

        console.log(`Seeding ${amount} more members using factory...`);
        await userFactory.saveMany(amount);

        console.log('Finished seeding member');
    }
}