import { createUser, getUsers } from "../controllers/user.controller.js";
import express from "express";

const router=express.Router();

router.post('/registeruser', createUser);
router.get('/getuser', getUsers);

export default router;
