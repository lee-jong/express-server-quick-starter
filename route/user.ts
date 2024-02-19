import express from "express";
import { signin, signup, duplication } from "../controller/user";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/singin").post(signin);
router.route("/duplication").post(duplication);
export default router;
