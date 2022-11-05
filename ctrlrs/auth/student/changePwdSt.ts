import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
import "../interfaces";

const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();
const JWT = require("../../../helpers/jwt");
const redis = require("../../../config/config");

const changePwdS = async (req: any, res: any): Promise<void> => {
  try {
    if (!JWT.verifyJwt(redis.get("jwt"))) {
      res
        .status(403)
        .end({
          status: false,
          msg: "You do not have the permissions to change password",
        });
      return;
    }
    const salt: string = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const id = req.params.id;

    const updPwd = await prisma.student.update({
      where: {
        id: id,
      },
      data: {
        password: password,
      },
    });

    res.status(200).send({ status: true, msg: "user password updated!" });
  } catch (e) {
    console.log(e);
    res
      .status(403)
      .send({ status: false, msg: "there was an error updating password" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = changePwdS;
