import { Request, Response } from 'express';
import { UserCard } from '../models/UserCard';
import { getRepository } from 'typeorm';

class UserListAllCards {
  async index(request: Request, response: Response){
    const userCard = getRepository(UserCard);

    const user = await userCard.find();
    
    if(!user){
      return response.status(401).json({
        error: true,
        message: "Não possui informações na base no momento besuqe novamente !"
      });
    };
    return response.status(200).json({
      user
    });
  };
};
export default new UserListAllCards();