import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1739609823171 implements MigrationInterface {
    name = 'Init1739609823171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "member" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member_project" ("id" SERIAL NOT NULL, "assigned_at" TIMESTAMP NOT NULL DEFAULT now(), "member_id" integer, "project_id" integer, CONSTRAINT "PK_87913eee42a32bebe9af67d7526" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "member_project" ADD CONSTRAINT "FK_bb0a493e7690e24a9c02385e28b" FOREIGN KEY ("member_id") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_project" ADD CONSTRAINT "FK_0097da394fad878276309cc32cf" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member_project" DROP CONSTRAINT "FK_0097da394fad878276309cc32cf"`);
        await queryRunner.query(`ALTER TABLE "member_project" DROP CONSTRAINT "FK_bb0a493e7690e24a9c02385e28b"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "member_project"`);
        await queryRunner.query(`DROP TABLE "member"`);
    }

}
