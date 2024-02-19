import { Request, Response, NextFunction } from "express";
import { tokenVerify } from "../helper/token";

const excepPath = [
  "/api/v1/auth/token",
  "/api/v1/common/ping",
  "/api/v1/todo",
  "/api/v1/user",
];
const iterceptor = (req: Request, res: Response, next: NextFunction) => {
  try {
    const excepVaild = excepPath.some((path) => req.path.startsWith(path));
    console.log("###", excepVaild);
    if (excepVaild) return next();
    const { authorization } = req.headers;
    if (!authorization) return next(400);
    const tokeVaild = tokenVerify(authorization);
    if (!tokeVaild) return next(401);
    next();
  } catch (e) {
    next(500);
  }
};

export default iterceptor;
