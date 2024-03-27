import express  from "express";
import { UpdateUser, createUser, deleteUser, getUserByI, getUsers } from "../controller/UsersController.js";

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserByI).put(UpdateUser).delete(deleteUser)

export default router







