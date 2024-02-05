import epxress from "express";
import { getTodoList } from "../controller/todo";
const router = epxress.Router();

router.route("/list").get(getTodoList);

export default router;
