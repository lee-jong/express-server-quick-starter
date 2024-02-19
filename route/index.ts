import { Express } from "express";
import auth from "./auth";
import common from "./common";
import rtsp from "./rtsp";
import todo from "./todo";
import user from "./user";

const route = (app: Express) => {
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/common", common);
  app.use("/api/v1/rtsp", rtsp);
  app.use("/api/v1/todo", todo);
  app.use("/api/v1/user", user);
};

export default route;
