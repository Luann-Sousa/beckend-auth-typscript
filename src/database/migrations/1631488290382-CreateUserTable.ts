import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateUserTable1631488290382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(new Table({
           name: "userscards",
           columns: [
               {
                   name: "id",
                   type: "varchar",
                   isPrimary: true,
                   
               },
               {
                   name: "cpf",
                   type: "varchar"
               },
               {
                name: "password",
                type: "varchar"
            }
           ]
       }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("userscards")
    }

}
