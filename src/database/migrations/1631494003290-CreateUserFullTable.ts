import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateUserFullTable1631494003290 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(new Table({
            name: "usercardfulls",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "number_card",
                    type: "varchar",
                },
                {
                    name: "date_card",
                    type: "varchar",
                },
                {
                    name: "cvv_card",
                    type: "varchar",
                },
            ],
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable("usercardfulls");
    };

};
