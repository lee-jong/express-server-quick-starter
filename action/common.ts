import { Express } from "express";
import global from "../util/global";

const Common = (app: Express) => {
  app.get("/ping", (req, res) => {
    global.logger.info("GET - PING");
    return res.json({
      status: 200,
      message: "OK",
    });
  });
};

export default Common;
