import { Express } from "express";
import global from "../util/global";

const Rtsp = (app: Express) => {
  app.get("/rtsp/info", (req, res) => {
    const data = {
      client_total: global.rtspClients,
      rtsp_info: global.rtspInfo,
    };
    global.logger.info("GET - RTSP INFO", data);
    return res.json({
      status: 200,
      data,
    });
  });
};

export default Rtsp;
