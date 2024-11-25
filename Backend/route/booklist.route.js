import express from "express";
import { getBookList } from "../controller/booklist.controller.js";

const router = express.Router();
router.get("/", getBookList);

export default router;