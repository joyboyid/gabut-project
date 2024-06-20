import express from "express";
import {
    getUsers,
    getUserById,
    createUsers,
    updateUsers,
    deleteUsers
} from "../controllers/Users.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', verifyUser, adminOnly, createUsers);
router.delete('/users/:id', verifyUser, adminOnly, deleteUsers);
router.patch('/users/:id', verifyUser, adminOnly, updateUsers);

export default router;