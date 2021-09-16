import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity("userscards")
class UserCard{
    @PrimaryColumn("text")
    id: string;

    @Column("text")
    cpf: string;

    @Column("text")
    password: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        };
    };
}
export { UserCard };