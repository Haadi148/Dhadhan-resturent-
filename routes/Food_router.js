import express  from "express";
import { Updatefood, createfood, deletefood, getfoodById, getfoods } from "../controller/foodCortoller.js";

const routes = express.Router();

routes.route ('/').get(getfoods).post(createfood);
routes.route ('/:id').put(Updatefood).get(getfoodById).delete(deletefood)

export default routes

