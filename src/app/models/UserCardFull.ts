import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity("usercardfulls")
class UserCardFull {
    @PrimaryColumn("text")
    id: string;

    @Column("text")
    number_card: string;

    @Column("text")
    date_card: string;

    @Column("text")
    cvv_card: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        };
    };
};
export { UserCardFull };