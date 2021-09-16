import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { v4 as uuid } from 'uuid';
import { hashSync } from 'bcryptjs';
@Entity("users")
class User {
    @PrimaryColumn("text")
    id: string;

    @Column("text")
    email: string;

    @Column("text")
    password: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        };
    };

    @BeforeInsert()
    @BeforeUpdate()
    hasPassword(){
        this.password = hashSync(this.password, 8);
    }
};
export { User };
