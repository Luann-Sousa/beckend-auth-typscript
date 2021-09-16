import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
interface IPayload{
  sub: string;
};
export async function ensureAutheticate(request: Request, response: Response, next: NextFunction){
  
    const authToken = request.headers.authorization;
    console.log(authToken)

    if(!authToken){
      return response.status(400).json({
        error: false,
        message: " Token was not passed !"
      });
    };

    const [, token] = authToken.split(" ");  
     
    try {
     
     const { sub } = verify( token ,"0b307ba5e9c6bb5e04528bb57925b471") as IPayload; //forçando nosso verify ser do tipo
   
        sub;//passando para nossa requisição nosso id de user
    
     } catch (err) {
    
      if(err){
        return response.status(401).end();
      };
    };
      return next();
    
};

