import express from "express";
import { jwtSign } from "../helper/token";
import { handleStatus } from "../util/status";
import global from "../util/global";

const router = express.Router();

router.route("token").post((req, res) => {
  try {
    const { id, pw } = req.body;
    const { ID, PW } = process.env;
    if (!id || !pw) throw 400;
    if (id !== ID || pw !== PW) throw 400;
    return res.status(200).json({ token: jwtSign() });
  } catch (e: any) {
    res.status(e).json(handleStatus(e));
  } finally {
    global.logger.info("POST - TOKEN", req.body);
  }
});

export default router;
