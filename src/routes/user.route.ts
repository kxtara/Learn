import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";


const router = Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.put("/:id", UserController.updateUser);

export default router;