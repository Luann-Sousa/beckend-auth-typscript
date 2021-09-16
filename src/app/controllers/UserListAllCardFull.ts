import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserCardFull } from '../models/UserCardFull';

class UserListAllCards {
  async index(request: Request, response: Response){
    const usercardfull = getRepository(UserCardFull);

    const usercardfulls = await usercardfull.find();
    if(!usercardfulls ){
      return response.status(401).json({
        error: true,
        message: "Não possui informações na base no momento besuqe novamente !"
      });
    };
    return response.status(200).json({
      usercardfulls
    });
  }
};
export default new UserListAllCards();