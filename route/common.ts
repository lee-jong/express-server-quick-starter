import express from "express";
import global from "../util/global";

const router = express.Router();

router.route("/ping").get((req, res) => {
  global.logger.info("GET - PING");
  return res.json({
    status: 200,
    message: "OK",
  });
});

export default router;
