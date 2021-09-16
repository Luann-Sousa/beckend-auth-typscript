import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/Users';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class AuthController {
    async authenticate(request: Request, response: Response){
        const repositorie = getRepository(User);
        const { email, password } = request.body;

        const userExists = await  repositorie.findOne({where: {email}});

        if(!userExists){
            return response.status(401).json({
                error: true,
                message: "not user is Exists !"
            });
        };
        const isValidPassword = await compare(password, userExists.password);

        if(!isValidPassword){
            return response.status(401).json({
                error: true,
                message: "not user password is Exists !"
            });
        };
        const token = sign({id: userExists.id}, "0b307ba5e9c6bb5e04528bb57925b471", {
            expiresIn: "1d"
        });
        
        response.json({
            userExists,
            token
        });

        

    };
};
export default new AuthController();