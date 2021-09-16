import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserCardFull } from '../models/UserCardFull';

class UserCardFullController {
    async store(request: Request, response: Response){
        const userRepositorie = getRepository(UserCardFull);

        const { number_card, date_card, cvv_card} = request.body;

        const userfull = userRepositorie.create({
            number_card,
            date_card,
            cvv_card,
        });
        await userRepositorie.save(userfull);

        return response.json(userfull);
    };
};

export default new UserCardFullController();