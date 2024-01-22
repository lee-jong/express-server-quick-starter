import { Express } from "express";
import Auth from "./auth";
import Common from "./common";
import Rtsp from "./rtsp";

const action = (app: Express) => {
  Auth(app);
  Common(app);
  Rtsp(app);
};

export default action;
