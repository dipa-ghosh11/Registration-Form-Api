import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller.js";
import express from "express";

const router=express.Router();

router.post('/registeruser', createUser);
router.get('/getuser', getUsers);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);
export default router;
