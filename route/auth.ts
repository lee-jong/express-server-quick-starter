import express from "express";
import { createToken } from "../controller/auth";

const router = express.Router();

router.route("token").post(createToken);
export default router;
