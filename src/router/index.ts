import { UserController } from "../controller";
import express from "express";

const router = express.Router();

router.get("/", new UserController().list);
router.post("/", new UserController().create);
router.delete("/id", new UserController().delete);

export default router;