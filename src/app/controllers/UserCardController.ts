import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserCard } from '../models/UserCard';
class UserCardController{
    async store(request: Request, response: Response){
        const repositorie = getRepository(UserCard);

        const { cpf, password } = request.body;

       const user = repositorie.create({    
           cpf,
           password
       });
       await repositorie.save(user);

       return response.json(user);
    }
};
export default new UserCardController();