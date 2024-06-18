import express from "express";
import {
    getUsers,
    getUserById,
    createUsers,
    updateUsers,
    deleteUsers
} from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUsers);
router.delete('/users/:id', deleteUsers);
router.patch('/users/:id', updateUsers);

export default router;