import { Router } from "express";
import {
  deleteCard,
  getCard,
  getCards,
  createCard,
  patchCard,
 // updateMany,
  //addManyCards,
} from "../controllers/cards.controller.js";
const router = Router();

router.get("/", getCards);
router.get("/:id", getCard);
router.post("/", createCard);
router.delete("/:id", deleteCard);
router.patch("/:id", patchCard);
// router.get("/", updateMany);
//router.get("/addmany", addManyCards);

export default router;
