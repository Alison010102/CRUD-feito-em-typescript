import {Router} from "express";
import {UserController} from "../controller/UserController";

const router = Router();
router.get( "/", new UserController().list);
router.get("/:id", new UserController().findBild);
router.post("/", new UserController().create);
router.delete("/:id", new UserController().delete);
router.put("/", new UserController().update);

export default Router;