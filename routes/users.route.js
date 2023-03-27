import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  createUser,
  patchUser,
  getCardsUser,
  addCardUser,
  updataStateCardUser
} from "../controllers/user.controller.js";
const router = Router();

 router.get("/", getUsers);
router.get("/user/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", patchUser);
router.post("/addcard/:userid", addCardUser);
router.get("/cards/:userid", getCardsUser);
router.patch("/cards/:userid/:idcard", updataStateCardUser);

export default router; 
  