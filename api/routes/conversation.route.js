import express from "express";
import {
  createConversation,
  getConversations,
  getSingleConversation,
  updateConversation,
} from "../controllers/conversation.controller.js";
import { getToken } from "next-auth/jwt";

const router = express.Router();

router.get("/", getToken, getConversations);
router.post("/", getToken, createConversation);
router.get("/single/:id", getToken, getSingleConversation);
router.put("/:id", getToken, updateConversation);

export default router;