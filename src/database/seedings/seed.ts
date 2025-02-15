import { runSeeders } from "typeorm-extension";
import seederDataSource from "../../configs/seeder.config";

void (async () => {
    try {
        await seederDataSource.initialize();
        await runSeeders(seederDataSource);
        process.exit();
    } catch (error) {
        console.error('Error during seeding: ', error);
        process.exit(1);
    }
})();