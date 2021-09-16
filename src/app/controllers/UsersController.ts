import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/Users';

class UsersController {
    async store(request: Request, response: Response){
        const repositorie = getRepository(User);
        const { email, password } = request.body;

        const emailExists = await  repositorie.findOne({where: {email}});

        if(emailExists){
            return response.status(409).json({
                error: true,
                message: "email is Exists !"
            });
        };

        const users = repositorie.create({
            email,
            password,
        });
        await repositorie.save(users);
        
        return response.json(users);

    };
};
export default new UsersController();