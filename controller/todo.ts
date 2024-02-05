import { Request, Response } from "express";

export const getTodoList = (req: Request, res: Response) => {
  const data = {
    list: [{ title: "hi", description: "----" }],
  };
  return res.json({
    status: 200,
    data,
  });
};
