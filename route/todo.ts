import epxress from "express";
import {
  getTodoList,
  createTodo,
  deleteTodo,
  getTogetherTodo,
} from "../controller/todo";
const router = epxress.Router();

router.route("/list").get(getTodoList).post(createTodo).delete(deleteTodo);
router.route("/together/list").get(getTogetherTodo);

export default router;
