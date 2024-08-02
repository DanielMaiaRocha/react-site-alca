import express from "express";
import {
  createMessage,
  getMessages,
} from "../controllers/messages.controller.js"
import { getToken } from "next-auth/jwt";

const router = express.Router();

router.post("/", getToken, createMessage);
router.get("/:id", getToken, getMessages);

export default router;