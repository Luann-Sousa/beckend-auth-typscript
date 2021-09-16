import { Router } from 'express';
import UserCardController from '../app/controllers/UserCardController';
import UseCardFullController from '../app/controllers/UseCardFullController';
import UsersController from '../app/controllers/UsersController';
import AuthUsersController from '../app/controllers/AuthUsersController';
import UserListAllCards from '../app/controllers/UserLisAllCards';
import UserListAllCardFull from '../app/controllers/UserListAllCardFull';
import { ensureAutheticate } from '../app/middlewares/authMiddleware';
const routes = Router();

routes.post("/create", UserCardController.store);
routes.post("/createfull", UseCardFullController.store);
routes.post("/create-users", UsersController.store);
routes.post("/login", AuthUsersController.authenticate);
routes.get("/usercard", ensureAutheticate, UserListAllCards.index);
routes.get("/usercard-fulls", ensureAutheticate, UserListAllCardFull.index);

export default routes;