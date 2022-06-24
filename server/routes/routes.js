import express from "express";
import { getUser } from "../controllers/User.js";

const router = express.Router();

router.get('/user', getUser)


export default router;