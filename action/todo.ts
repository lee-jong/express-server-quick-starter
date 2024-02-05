import epxress from "express";
import global from "../util/global";
import { handleStatus } from "../util/status";

const router = epxress.Router();

//handler를 나누는 걸 추천
router
  .route("/list")
  .get((req, res) => {
    const data = {
      list: global.todoList,
    };
    res.status(200).json({
      status: 200,
      data,
    });
  })
  .post((req, res) => {
    try {
      const { title } = req.body;
      if (!title) throw 400;
      const idx = global.todoList[global.todoList.length - 1].idx;
      const setData = {
        idx: idx + 1,
        title,
      };
      global.todoList.push(setData);
      console.log("#", global.todoList);
      res.status(200).json({
        status: 200,
        data: "success",
      });
    } catch (e: any) {
      res.status(e).json(handleStatus(e));
    }
  })
  .delete((req, res) => {
    try {
      console.log("####", req.body, req.query);
      const { idx } = req.body;
      if (!idx) throw 400;
      const data = global.todoList.filter((item) => item.idx != idx);
      global.todoList = data;

      res.status(200).json({
        status: 200,
        data: "success",
      });
    } catch (e: any) {
      res.status(e).json(handleStatus(e));
    }
  });

export default router;
