import epxress from "express";
import { getTodoList, createTodo, deleteTodo } from "../controller/todo";
const router = epxress.Router();

router.route("/list").get(getTodoList).post(createTodo).delete(deleteTodo);

export default router;
