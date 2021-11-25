import { Router } from "express";
import { ensureAuthenticated } from "./src/middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./src/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./src/useCases/createUser/CreateUserController";
import { RefreshTokenUserController } from "./src/useCases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const  authenticateUserController = new  AuthenticateUserController();
const  refreshTokenUserController = new  RefreshTokenUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);

router.get("/courses", ensureAuthenticated, (request,response)=>{
    return response.json([
        {id: 1, name: "NODEJS"},
        {id: 2, name: "REACTJS"},
        {id: 3, name: "ELIXIR"},
        {id: 4, name: "REACT NATIVE"},
    ]);
});

export { router };

