import { Request, Response } from "express";
import global from "../util/global";
import { handleStatus } from "../util/status";
import validtion from "../helper/validtion";
import db from "../database";
import Crypto from "../helper/crypto";

export const signin = async (req: Request, res: Response) => {
  try {
    const { id, pw } = req.body;
    const sql = `select * from public.user where id like '${id}'`;
    const data = await db.query(sql).catch(() => {
      throw 500;
    });
    if (!data.rowCount) throw 400;
    const user: User = data.rows[0];
    if (Crypto.decrypt(pw) !== Crypto.decrypt(user.password)) throw 400;

    res.status(200).json({
      status: 200,
      message: "ok",
    });
  } catch (e: any) {
    res.status(e).json(handleStatus(e));
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { id, pw, nickname, dateOfBirth } = req.body;
    if (!id && validtion.id(id)) throw 400;
    if (!pw && validtion.pw(pw)) throw 400;
    if (!nickname && validtion.nickname(nickname)) throw 400;
    if (!dateOfBirth && validtion.dateOfBirth(dateOfBirth)) throw 400;

    const dupIdSql = `select * from public.user where id like '${id}'`;
    const dupIdData = await db.query(dupIdSql).catch(() => {
      throw 500;
    });

    if (dupIdData.rowCount) throw 409;

    const insertUserSql = `insert into public.user(id, password, nickname, date_of_birth) values('${id}', '${pw}', '${nickname}', '${dateOfBirth}')`;
    await db.query(insertUserSql).catch(() => {
      throw 500;
    });

    res.status(200).json({
      status: 200,
      message: "ok",
    });
  } catch (e: any) {
    res.status(e).json(handleStatus(e));
  }
};

export const duplication = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    if (!id) throw 400;
    const sql = `select * from public.user where id like '${id}'`;

    const data = await db.query(sql).catch(() => {
      throw 500;
    });

    if (data.rowCount) throw 409;

    res.status(200).json({
      status: 200,
      message: "ok",
    });
  } catch (e: any) {
    res.status(e).json(handleStatus(e));
  }
};
