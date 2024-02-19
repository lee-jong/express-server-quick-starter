import { Request, Response } from "express";
import global from "../util/global";
import { handleStatus } from "../util/status";
import db from "../database";

export const getTodoList = (req: Request, res: Response) => {
  const sql = "select * from  public.list where user_id like '1'";
  db.query(sql, (err, result) => {
    try {
      if (err) throw 500;
      res.status(200).json({
        status: 200,
        data: result.rows,
      });
    } catch (e: any) {
      res.status(e).json(handleStatus(e));
    }
  });
};

export const createTodo = (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title) throw 400;
    const idx = global.todoList[global.todoList.length - 1].idx;
    const setData = {
      idx: idx + 1,
      title,
    };
    global.todoList.push(setData);
    res.status(200).json({
      status: 200,
      data: "success",
    });
  } catch (e: any) {
    res.status(e).json(handleStatus(e));
  }
};

export const deleteTodo = (req: Request, res: Response) => {
  try {
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
};

export const getTogetherTodo = (req: Request, res: Response) => {
  try {
    const roomId: number = Number(req.query.roomId);
    if (!roomId) throw 400;
    res.status(200).json({
      data: global.togetherTodoList[roomId],
    });
  } catch (e: any) {
    res.status(e).json(handleStatus(e));
  }
};
